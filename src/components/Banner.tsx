import React from "react";

type Breadcrumb = {
  label: string;
  link: string;
  active?: boolean;
};

interface BannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

const Banner: React.FC<BannerProps> = ({ title, breadcrumbs }) => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-content">
              <h1 className="page-titile">{title}</h1>
              <ul className="banner-nav pull-right">
                {breadcrumbs.map((bc, idx) => (
                  <React.Fragment key={idx}>
                    <li className={bc.active ? "active" : ""}>
                      <a href={bc.link}>{bc.label}</a>
                    </li>
                    {/* Adiciona seta entre breadcrumbs, exceto após o último */}
                    {idx < breadcrumbs.length - 1 && (
                      <li>
                        <a href="#">
                          <span className="fa fa-angle-right"></span>
                        </a>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
