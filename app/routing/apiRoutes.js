const friends=[];
module.exports = (app) => {
  
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
   
      friends.push(req.body);
      res.json(friends);
  })
   





  

  app.post("/api/clear", (req, res) => {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
}