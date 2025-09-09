document.addEventListener("DOMContentLoaded", () => {
  if (typeof WordCloud === "undefined") {
    console.error("❌ WordCloud library not loaded!");
    return;
  }

  console.log("✅ WordCloud loaded, initializing...");

  const wordList = [
    ["PostgreSQL", 50],
    ["SQL Server", 40],
    ["Python", 35],
    ["Databricks", 30],
    ["AWS", 28],
    ["Terraform", 25],
    ["PySpark", 24],
    ["ETL", 22],
    ["Data Modeling", 20],
    ["Performance Tuning", 18],
    ["Cloud", 16],
    ["Analytics", 15],
  ];

  WordCloud(document.getElementById("wordCloudCanvas"), {
    list: wordList,
    gridSize: 10,
    weightFactor: 2,
    fontFamily: "Inter, sans-serif",
    color: function (word, weight) {
      return weight > 30 ? "#1e3a8a" : (weight > 20 ? "#2563eb" : "#6b7280");
    },
    rotateRatio: 0.5,
    rotationSteps: 2,
    backgroundColor: "transparent",
  });
});
