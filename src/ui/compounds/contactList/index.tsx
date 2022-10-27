import React, { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { getColor } from "../../../assets/theme/colors";
import { Typography } from "../../atoms";
import Button from "../../molecules/buttons";
import ContactCard from "../../molecules/contactCard";
import EmptyComponent from "../../molecules/emptyData";
import Modal from "../../molecules/modal";

interface IContactList {
  loading: boolean;
  data: any[];
}

function ContactList({ data, loading }: IContactList) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {loading && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: getColor("white"),
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
      {!loading && (
        <>
          {data?.length > 0 && (
            <FlatList
              data={data}
              renderItem={({ item }) => <ContactCard {...item} />}
            />
          )}
          {data.length < 1 && (
            <EmptyComponent content="Contact list is empty" />
          )}
        </>
      )}
    </View>
  );
}

export default ContactList;
