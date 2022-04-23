function Topic() {
  return (
    <div className="container pt-5">
      <div className="row content pt-5">
        <h2>Officially Blogging</h2>
        <h5>
          <span className="glyphicon glyphicon-time"></span> Asked by John Doe, Sep
          24, 2015.
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <hr />

        <h4>Leave a Comment:</h4>
        <form>
          <div className="form-group">
            <textarea className="form-control" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
        <br />
        <br />

        <p>
          <span className="badge">2</span> Comments:
        </p>
        <br />

        <div className="row">
          <div className="col-sm-12">
            <h4>
              Anja <small>Sep 29, 2015, 9:12 PM</small>
            </h4>
            <p>
              Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
          </div>
          <div className="col-sm-12">
            <h4>
              John Row <small>Sep 25, 2015, 8:25 PM</small>
            </h4>
            <p>
              I am so happy for you man! Finally. I am looking forward to read
              about your trendy life. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;
