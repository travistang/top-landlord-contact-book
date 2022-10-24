import {
  faTimes,
  faPlus,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

const loadAllIcons = () => library.add(
  faPlus,
  faTimes,
  faContactBook,
);

export default loadAllIcons;