import { Button, Col, Dropdown, Menu, Row } from "antd";
import { Link } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <b>
                  <Link to="/" style={{ color: "orangered" }}>
                    Rental Cars
                  </Link>
                </b>
              </h1>

              <Dropdown overlay={Menu} placement="bottomCenter">
                <Button>Muthu</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{children}</div>

      <div className="footer text-center">
        <hr />

        <p>Desinged and Developed By</p>

        <p>Muthu</p>
      </div>
    </div>
  );
};

export default DefaultLayout;
