import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { connect } from "react-redux";

const Profile = ({ currentUser, route }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(currentUser);
  }, []);

  if (!user) return <View />;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Card>
          <Card.Title
            title={user?.name}
            subtitle={user?.email}
            left={(props) => (
              <Avatar.Image
                size={24}
                {...props}
                source={
                  user?.avatar ||
                  "https://wealthspire.com/wp-content/uploads/2017/06/avatar-placeholder-generic-1.jpg"
                }
              />
            )}
          />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    margin: 20,
  },
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(Profile);
