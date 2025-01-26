

import batzImage from "../assets/nawales/batz.png";
import eImage from "../assets/nawales/e.png";
import ajImage from "../assets/nawales/aj.png";
import ixImage from "../assets/nawales/ix.png";
import tzikinImage from "../assets/nawales/tzikin.png";
import ajmaqImage from "../assets/nawales/ajmaq.png";
import nojImage from "../assets/nawales/noj.png";
import tijaxImage from "../assets/nawales/tijax.png";
import kawoqImage from "../assets/nawales/kawoq.png";
import ajpuImage from "../assets/nawales/ajpu.png";
import imoxImage from "../assets/nawales/imox.png";
import iqImage from "../assets/nawales/iq.png";
import aqabalImage from "../assets/nawales/aqabal.png";
import katImage from "../assets/nawales/kat.png";
import kanImage from "../assets/nawales/kan.png";
import kemeImage from "../assets/nawales/keme.png";
import keejImage from "../assets/nawales/keej.png";
import qanilImage from "../assets/nawales/qanil.png";
import tojImage from "../assets/nawales/toj.png";
import tziImage from "../assets/nawales/tzi.png";
import luzMayaImage from "../assets/design/luzmaya.png";
import chenImage from "../assets/haab/ch'en.png";
import kankinImage from "../assets/haab/k'ank'in.png";
import kayabImage from "../assets/haab/k'ayab'.png";
import kejImage from "../assets/haab/kej.png";
import kumkuImage from "../assets/haab/kumk'u.png";
import makImage from "../assets/haab/mak.png";
import molImage from "../assets/haab/mol.png";
import muwanImage from "../assets/haab/muwan.png";
import paxImage from "../assets/haab/pax.png";
import popImage from "../assets/haab/pop.png";
import sakImage from "../assets/haab/sak.png";
import sekImage from "../assets/haab/sek.png";
import sipImage from "../assets/haab/sip.png";
import sotzImage from "../assets/haab/sotz'.png";
import wayebImage from "../assets/haab/wayeb'.png";
import woImage from "../assets/haab/wo'.png";
import xulImage from "../assets/haab/xul.png";
import yaxImage from "../assets/haab/yax.png";
import yaxkinImage from "../assets/haab/yaxk'in.png";


//cargar imagenes

export const getImage = (image) => {
    switch (image) {
      case "B'atz":
        return batzImage;
      case "E":
        return eImage;
      case "Aj":
        return ajImage;
      case "I'x":
        return ixImage;
      case "Tz'ikin":
        return tzikinImage;
      case "Ajmaq":
        return ajmaqImage;
      case "No'j":
        return nojImage;
      case "Tijax":
        return tijaxImage;
      case "Kawoq":
        return kawoqImage;
      case "Ajpú":
        return ajpuImage;
      case "Imox":
        return imoxImage;
      case "Iq'":
        return iqImage;
      case "Aq'ab'al":
        return aqabalImage;
      case "K'at":
        return katImage;
      case "Kan":
        return kanImage;
      case "Keme":
        return kemeImage;
      case "Keej":
        return keejImage;
      case "Q'anil":
        return qanilImage;
      case "Toj":
        return tojImage;
      case "Tz'i'":
        return tziImage;
        case "Ch'en":
          return chenImage;
        case "K'ank'in":
          return kankinImage;
        case "K'ayab'":
          return kayabImage;
        case "Kej":
          return kejImage;
        case "Kumk'u":
          return kumkuImage;
        case "Mak":
          return makImage;
        case "Mol":
          return molImage;
        case "Muwan":
          return muwanImage;
        case "Pax":
          return paxImage;
        case "Pop":
          return popImage;
        case "Sak":
          return sakImage;
        case "Sek":
          return sekImage;
        case "Sip":
          return sipImage;
        case "Sotz'":
          return sotzImage;
        case "Wayeb'":
          return wayebImage;
        case "Wo'":
          return woImage;
        case "Xul":
          return xulImage;
        case "Yax":
          return yaxImage;
        case "Yaxk'in":
          return yaxkinImage;
        case "luzmaya":
          return luzMayaImage;
      default:
        return eImage;
    }
  };