const config = {
  widgets: [
    {
     type: "debug",
     title: "Debug",
     formula: "echo \"hello\"",
     interval: 1000,
     limit: 10
   },
   {
     type: "line",
     title: "Line",
     formula: "echo \"mello\"",
     interval: 4000,
     limit: 20
   },
   {
     type: "text",
     title: "Text",
     formula: "echo \"Mello, mello, mello, mello, mello, mello, mello, mello, mello.\"",
     interval: 4000,
     limit: 20
   },
   {
     type: "pie",
     title: "Pie",
     formula: "echo \"mello\"",
     interval: 4000,
     limit: 20
   },
   {
     type: "bar",
     title: "Bar",
     formula: "echo \"mello\"",
     interval: 4000,
     limit: 20
   },
  ]
};
 
export default config;