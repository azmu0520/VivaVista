import { Select } from "antd";
import { Body, Container, Sidebar, Wrap } from "./style";
import Card from "../Generic/Card";

export default function Products() {
  return (
    <Container>
      <Wrap>
        <Sidebar>
          <div className="title_wrap">
            <span>Filter by</span>
          </div>
          <ul>
            <li className="filter_title">Categories</li>
            <li>
              <input type="checkbox" id="Dogs" />
              <label htmlFor="Dogs">Dogs</label>
            </li>
            <li>
              <input type="checkbox" id="Cats" />
              <label htmlFor="Cats">Cats</label>
            </li>
            <li>
              <input type="checkbox" id="Small" />
              <label htmlFor="Small">Small Pets</label>
            </li>
            <li>
              <input type="checkbox" id="Birds" />
              <label htmlFor="Birds">Birds</label>
            </li>
            <li>
              <input type="checkbox" id="Fish" />
              <label htmlFor="Fish">Fish</label>
            </li>
            <li className="last_item">
              <input type="checkbox" id="Reptiles" />
              <label htmlFor="Reptiles">Reptiles</label>
            </li>

            <li className="filter_title">Availability</li>
            <li>
              <input type="checkbox" id="stock" />
              <label htmlFor="stock">stock</label>
            </li>
            <li className="last_item">
              <input type="checkbox" id="out_stock" />
              <label htmlFor="out_stock">out_stock</label>
            </li>
            <li className="filter_title">Brand</li>
            <li>
              <input type="checkbox" id="petty" />
              <label htmlFor="petty">petty</label>
            </li>
            <li>
              <input type="checkbox" id="adidas" />
              <label htmlFor="adidas">adidas</label>
            </li>
            <li className="last_item">
              <input type="checkbox" id="malibu" />
              <label htmlFor="malibu">malibu</label>
            </li>
          </ul>
        </Sidebar>
        <Body>
          <div className="header">
            <h3>Total Products</h3>
            <div className="controllers">
              <div className="sort_wrap">
                <span className="span">Sort By:</span>
                <Select
                  style={{
                    width: 120,
                  }}
                  // onChange={handleChange}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="products">
            {[1, 1, 2, 3, 3, 4, 5, 6, 7].map((item) => (
              <Card key={item} />
            ))}
          </div>
        </Body>
      </Wrap>
    </Container>
  );
}
