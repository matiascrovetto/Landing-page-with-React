function Jumbo() {
    return (
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none"> </a>
        </header>
        <div className="p-5 mb-4 bg-success rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">¡Choose your favorite pet!</h1>
            <p className="col-md-8 fs-4">Pets provide many benefits to humans. They comfort us and they give us companionship. However, some animals can also pass diseases to people.</p>
            <button className="btn btn-light btn-lg" type="button">Find your best friend here!</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Jumbo;