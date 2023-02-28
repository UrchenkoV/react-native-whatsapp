import React from "react";
import Stories from "../components/Stories";
import Conversations from "../components/Conversations";
import DefaultLayout from "../layouts/DefaultLayout";

export default function HomeScreen() {
  return (
    <>
      <DefaultLayout>
        <Stories />
        <Conversations />
      </DefaultLayout>
    </>
  );
}
