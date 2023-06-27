import img2D from "../../assets/images/whatWeOffer/2DAnimation.png";
/*import imgArrowRight from "../../assets/images/whatWeOffer/arrow-right.svg";*/
import imgLogo from "../../assets/images/whatWeOffer/logoDesign.png";
import imgLogo2 from "../../assets/images/whatWeOffer/logoDesign2.png";
import imgMobAppDev from "../../assets/images/whatWeOffer/mobAppDevelop.png";
import imgProductBrand from "../../assets/images/whatWeOffer/productBranding.png";
import imgVideoEdit from "../../assets/images/whatWeOffer/videoEditing.png";
import imgWebsite from "../../assets/images/whatWeOffer/websiteDevelop.png";

const offerData = [
  {
    image: imgLogo,
    theme: "Logo Design",
    info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
  },
  {
    image: imgWebsite,
    theme: "Website Development",
    info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
  },
  {
    image: imgMobAppDev,
    theme: "Mobile App Development",
    info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
  },
  {
    image: img2D,
    theme: "2D Animation",
    info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
  },
  {
    image: imgVideoEdit,
    theme: "Video Editing",
    info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
  },
  {
    image: imgProductBrand,
    theme: "Product Branding",
    info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
  },
  {
    image: imgLogo2,
    theme: "Logo Design",
    info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
  },
  {
    image: imgWebsite,
    theme: "Product Branding",
    info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
  },
  {
    image: "images/whatWeOffer-images/videoEditing.png",
    theme: "Video Editing",
    info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
  },

  {
    image: "images/whatWeOffer-images/productBranding.png",
    theme: "Product Brandingt",
    info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
  },
];

function OfferBlock() {
  return (
    <div className="what-we-offer">
      <div
        image={offerData[0].image}
        theme={offerData[0].theme}
        info={offerData[0].info}
      />
      <div
        image={offerData[1].image}
        theme={offerData[1].theme}
        info={offerData[1].info}
      />
      <div
        image={offerData[2].image}
        theme={offerData[2].theme}
        info={offerData[2].info}
      />
    </div>
  );
}
export default OfferBlock;
