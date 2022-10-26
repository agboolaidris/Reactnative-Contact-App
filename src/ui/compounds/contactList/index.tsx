import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Typography } from "../../atoms";
import Button from "../../molecules/buttons";
import EmptyComponent from "../../molecules/emptyData";
import Modal from "../../molecules/modal";

function ContactList() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <Modal visible={openModal} handleClose={() => setOpenModal(false)} />

      <Typography>ContactList</Typography>
      <Button
        title="Open Modal"
        color="accent"
        onPress={() => setOpenModal(true)}
      /> */}
      {data?.length > 0 && (
        <FlatList
          data={data}
          renderItem={() => (
            <View>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                dolores rerum quia perferendis officia numquam officiis aliquid
                enim, iusto vel facere veritatis hic voluptatem quisquam culpa
                in dicta commodi ipsam!
              </Typography>
            </View>
          )}
        />
      )}
      {data.length < 1 && <EmptyComponent content="Contact list is empty" />}
    </View>
  );
}

export default ContactList;
