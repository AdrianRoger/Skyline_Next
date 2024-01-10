import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid bg-fundo rodape mt-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {/*<!-- Grupo Fale Conosco -->*/}
              <div className="col">
                <div className="gp-col-foot">
                  <h3 className="foot-title ">Fale Conosco</h3>
                  <hr className="group-divider"></hr>
                    <div className="gp-footer ">
                      <i className="bi bi-telephone-fill fs-4"></i>
                      <p className="marc">+55 (61) 9 9999-999</p>
                    </div>
                    <div className="gp-footer ">
                      <i className="bi bi-envelope-fill fs-4"></i>
                      <p className="marc">skyline@skyline.com</p>
                    </div>
                    <div className="gp-footer ">
                      <i className="bi bi-geo-alt-fill fs-4"></i>
                      <p className="marc">72.145-831 Brasília-DF</p>
                    </div>
                </div>
              </div>
              {/*<!-- Grupo Redes Sociais -->*/}
              <div className="col">
                <div className="gp-col-foot">
                  <h3 className="foot-title ">Redes Sociais</h3>
                  <hr className="group-divider"></hr>
                    <div className="gp-footer ">
                      <i className="bi bi-instagram fs-4"></i>
                      <p className="marc">instagram.com/skyline</p>
                    </div>
                    <div className="gp-footer ">
                      <i className="bi bi-facebook fs-4"></i>
                      <p className="marc">facebook.com/skyline</p>
                    </div>
                    <div className="gp-footer ">
                      <i className="bi bi-youtube fs-4"></i>
                      <p className="marc">youtube.com/skyline</p>
                    </div>
                </div>
              </div>
              {/*<!-- Grupo Seções nessa página -->*/}
              <div className="col">
                <div className="gp-col-foot">
                  <h3 className="foot-title ">Powered By</h3>
                  <hr className="group-divider"></hr>
                    <div className="gp-footer ">
                      <i className="bi bi-filetype-html fs-4"></i>
                      <p className="marc">HTML/CSS</p>
                    </div>
                    <div className="gp-footer ">
                      <i className="bi bi-bootstrap-fill fs-4"></i>
                      <p className="marc">BootStrap 5.3.1</p>
                    </div>
                    <div className="gp-footer">
                      <i className="bi bi-filetype-js fs-4"></i>
                      <p className="marc text-decoration-line-through">ScrollReveal</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="marca-pessoal">
            <p>
              <Link className="git-link fs-3" href="https://github.com/AdrianRoger"
                target="_blank"><i className="bi bi-github me-2"></i>github.com/AdrianRoger</Link>
            </p>
          </div>
        </div>
      </footer>

      <script async
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossOrigin="anonymous"></script>
    </>
  );
}
