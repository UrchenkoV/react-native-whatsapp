import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Conversation from "../components/Conversations/Conversation";

export default function ConversationScreen() {
  return (
    <DefaultLayout>
      <Conversation />
    </DefaultLayout>
  );
}
