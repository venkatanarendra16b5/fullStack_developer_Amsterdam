const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const treeData = ref(null);
    const selectedNode = ref(null);

    const fetchTree = async () => {
      const res = await fetch("http://localhost:3000/api/tree");
      const json = await res.json();
      treeData.value = json.data[0];
      renderTree();
    };

    const renderTree = () => {
      const svg = d3.select("svg");
      svg.selectAll("*").remove();

      const root = d3.hierarchy(treeData.value);
      const treeLayout = d3.tree().size([400, 600]);
      treeLayout(root);

      // LINKS
      svg.selectAll("path.link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#ccc")
        .attr("stroke-width", 1.5)
        .attr("d", d3.linkHorizontal()
          .x(d => d.y)
          .y(d => d.x)
        );

      // NODES GROUP
      const node = svg.selectAll("g.node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.y}, ${d.x})`)
        .style("cursor", "pointer")
        .on("click", (_, d) => {
          selectedNode.value = d.data;
        });

      // NODE RECTANGLE (CARD)
      node.append("rect")
        .attr("x", -40)
        .attr("y", -15)
        .attr("width", 80)
        .attr("height", 30)
        .attr("rx", 6)
        .attr("fill", "#fff")
        .attr("stroke", "#333")
        .attr("stroke-width", d =>
          selectedNode.value?.name === d.data.name ? 2 : 1
        );

      // NODE TEXT
      node.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("font-size", "12px")
        .text(d => d.data.name);
    };


    onMounted(fetchTree);

    return {
      selectedNode
    };
  },

  template: `
    <div id="container">
      <svg width="800" height="500"></svg>

      <div id="sidebar" v-if="selectedNode">
        <button @click="selectedNode = null">✖</button>
        <h3>{{ selectedNode.name }}</h3>
        <p>{{ selectedNode.description }}</p>
      </div>
    </div>
  `
}).mount("#app");
