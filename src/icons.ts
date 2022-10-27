import {
  faTimes,
  faPlus,
  faContactBook,
  faArrowRight,
  faUser,
  faHome,
  faCheckCircle,
  faFaceFrown,
  faFaceMehBlank,
  faFaceGrinWide,
  faFaceLaughBeam,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const loadAllIcons = () =>
  library.add(
    faPlus,
    faTimes,
    faContactBook,
    faArrowRight,
    faUser,
    faHome,
    faCheckCircle,
    faFaceFrown,
    faFaceMehBlank,
    faFaceGrinWide,
    faFaceLaughBeam,
    faTrash
  );

export default loadAllIcons;
