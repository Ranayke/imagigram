import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchUser } from "../redux/actions";

const Main = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bem vindo!</Text>
    </View>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(null, mapDispatchToProps)(Main);
