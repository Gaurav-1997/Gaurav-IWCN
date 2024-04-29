const list = {
  "MONTH 1": [
    "Onboarding Call",
    "Google Search Console Access",
    "Google Analytics Access",
    "Website Access",
    "Technical Audit",
    "Anchor Text and Semantic Analysis",
    "Competitor Analysis",
    "Ahrefs, Third-Party Links, Mentions",
    "Google Data Studio Report + Local Reporting Suite",
    "Site Level Optimization",
    "On-Page Optimization",
    "Content Creation",
    "Content Publishing",
    "Keyword Research & Mapping",
    "Authority Niche Placements",
    "Review Management",
    "Citation Audit",
    "Video Recap",
  ],
};

/*
* User can edit the content of the list by clicking on the content and then
* press enter to save the changes.
* 
* User can pass listData in any function to send the data as payload in any api
* 
*/

const ReactAppFromCDN = () => {
  const { useState } = React;
  const [listData, setListData] = useState(list["MONTH 1"]);

  const handleEdit = (event, index) => {
    let newList = [...listData];
    newList[index] = event.currentTarget.textContent;
    setListData(newList)
  };
  return (
    <div>
      <div className="header">
        <b>MONTH 1</b>
      </div>

      {listData.map((item, index) => (
        <div key={index} className="content-box">
          <div
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => handleEdit(e, index)}
            className="editable-content"
          >
            {item}
          </div>
          <div className="empty-1"></div>
          <div className="empty-2"></div>
          <div className="empty-3"></div>
        </div>
      ))}
      <button onClick={()=>console.log(listData)}>Send</button>
    </div>
  );
};

ReactDOM.render(<ReactAppFromCDN />, document.querySelector("#root"));
