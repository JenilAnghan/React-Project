import React from "react";
import { Button, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export default function Card() {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{Props?.data?.title ?? "Title Unavailable"}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props?.data?.price} Rs.
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props?.data?.price} Rs. After Discount Price
          </CardSubtitle>
          <CardText>
          {props?.data?.description}
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}
