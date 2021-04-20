import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AwesomeButton from "./SuperButton";

configure({ adapter: new Adapter() });
