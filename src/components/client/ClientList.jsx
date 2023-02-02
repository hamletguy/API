import React from "react";
import ClientItem from "./PostItem";

const ClientList = (props) => {
  const { client } = props;
  console.log(client);

  const postList = client.map((post) => (
    <ClientItem key={post.id} post={post} />
  ));

  return (
    <div className="Container py-5">
      <div className="row">{postList}</div>
    </div>
  );
};

export default ClientList;
