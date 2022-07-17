import { View, Text, Button } from "react-native";
import React from "react";
import { useGlobalDispatch } from "../../store";
import { AUTHTYPE } from "../../store/reducers/auth";
import { Container, StyledView, Typography } from "../../ui/atoms";

const Login = () => {
  const dispatch = useGlobalDispatch();
  return (
    <Container>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      <Typography>
        Login Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio voluptate illo omnis voluptatem molestiae suscipit veritatis
        vel fuga deserunt praesentium obcaecati, repellendus temporibus aperiam
        vero sequi numquam dolores odio voluptates.
      </Typography>
      {/* <Button
        title="Login"
        onPress={() =>
          dispatch({ type: AUTHTYPE.LOGIN, payload: { isAuthenticated: true } })
        }
      /> */}
    </Container>
  );
};

export default Login;
