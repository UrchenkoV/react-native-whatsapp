import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { colors } from "../../../constants";
import Message from "../Message";
import MessageInput from "../MessageInput";
import { db } from "../../utils/firebase";
import { useAuth } from "../../useAuth";

export default function Conversation() {
  const [messages, setMessages] = React.useState([]);
  const { user } = useAuth();
  const { params } = useRoute();

  const fetchMessages = async () => {
    try {
      onSnapshot(collection(db, "messages"), (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    } catch (err) {
      console.warn(err);
    }
  };

  React.useEffect(() => {
    fetchMessages();
  }, []);

  const sendMessage = async (message) => {
    console.log(message, "message");
    try {
      await addDoc(collection(db, "messages"), {
        message,
        timestamp: serverTimestamp(),
        userFrom: user.uid,
        userTo: params.userId,
      });
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.scrollWrap}
      >
        <View style={styles.messagesWrap}>
          {messages.map((obj) => (
            <Message key={obj.id} {...obj} />
          ))}
        </View>
      </ScrollView>

      <MessageInput sendMessage={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.BG,
    marginTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  scrollWrap: {
    marginBottom: 20,
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
