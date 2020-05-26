import Vue from "vue";
import {
  Button,
  Row,
  Col,
  Menu,
  MenuItem,
  Container,
  Header,
  Footer,
  Main,
  Avatar,
  RadioButton,
  Submenu,
  MenuItemGroup,
  RadioGroup,
} from "element-ui";

const components = {
  Button,
  Row,
  Col,
  Menu,
  MenuItem,
  Container,
  Header,
  Footer,
  Main,
  Avatar,
  RadioButton,
  Submenu,
  MenuItemGroup,
  RadioGroup,
};

// 按需注册组件
Object.values(components).forEach((component) => Vue.use(component) );
