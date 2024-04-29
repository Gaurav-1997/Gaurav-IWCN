const PostApp = () => {
  const { useState } = React;
  const [data, setData] = useState(null);
  const [phonenumber, setPhonenumber] = useState("");
  const POST_URl = "https://chimpu.xyz/api/post.php";
  const handleClick = async () => {
    const response = await fetch(POST_URl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phonenumber,
      }),
    });
    const data = await response.json();
    setData(data);
  };
  return (
    <div>
      <div className="header">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          onChange={(e) => setPhonenumber(e.target.value)}
          value={phonenumber}
        />
        <br />

        {data && (
          <>
            <b>Message: {data.msg}</b>
            <br />
            <b>Error: {data.error}</b>
            <br />
            <b>Error_code: {data.error_code}</b>
          </>
        )}
      </div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "32px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Post
      </button>
    </div>
  );
};

ReactDOM.render(<PostApp />, document.querySelector("#root"));
