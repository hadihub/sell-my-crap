import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppScreen from '../components/AppScreen';
import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/hadi.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/hadi.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/hadi.jpg'),
  },
  {
    id: 4,
    title: 'T4',
    description: 'D4',
    image: require('../assets/hadi.jpg'),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete the message from message
    setMessages(messages.filter((m) => m.id !== message.id));
    //console.log("delete message: " + message.id);
    //Delete from server
  };

  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChevron={true}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 3,
              title: 'T3',
              description: 'D3',
              image: require('../assets/hadi.jpg'),
            },
          ])
        }
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
