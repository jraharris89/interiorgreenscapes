/* ═══════════════════════════════════════════════════════════
   CUSTOM BOTANICAL SVG ICONS
   Hand-crafted for Interior Greenscapes — not from any library
   ═══════════════════════════════════════════════════════════ */

/** Interior Plantscaping — decorative pot with tropical foliage */
export const IconPlantscape = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    {/* Pot */}
    <path
      d="M20 42 L18 56 C18 58 20 60 24 60 L40 60 C44 60 46 58 46 56 L44 42 Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="var(--icon-fill, none)"
    />
    <path
      d="M16 38 L48 38 C49 38 50 39 50 40 L50 42 C50 43 49 44 48 44 L16 44 C15 44 14 43 14 42 L14 40 C14 39 15 38 16 38 Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="var(--icon-fill, none)"
    />
    {/* Monstera leaf */}
    <path
      d="M32 38 C32 30 26 20 20 14 C22 20 20 26 22 30 C24 28 23 24 24 22 C26 26 26 32 28 36"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="var(--icon-accent, none)"
      fillOpacity="0.3"
    />
    {/* Tall upright leaf */}
    <path
      d="M34 38 C34 32 36 22 38 12 C40 20 42 28 40 38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="var(--icon-accent, none)"
      fillOpacity="0.3"
    />
    <path
      d="M38 12 L38 38"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    {/* Drooping leaf right */}
    <path
      d="M36 36 C40 30 48 26 52 24 C48 30 44 34 40 38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="var(--icon-accent, none)"
      fillOpacity="0.3"
    />
  </svg>
);

/** Green Walls — detailed fern/leaf panel in 2×2 grid */
export const IconGreenWall = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    {/* Fern — top-left cell */}
    <path
      d="M13.8877 24.4121C12.284 23.6982 11.6145 22.2754 11.5868 20.528C12.7011 21.2808 14.1521 21.8427 15.4554 21.7853L15.7349 21.7622C15.9726 21.7475 16.1847 21.698 16.3319 21.5801C16.4112 21.5165 16.4746 21.4301 16.5023 21.3231C16.5296 21.2174 16.5155 21.1165 16.4844 21.0341C16.4255 20.8783 16.2991 20.7623 16.1788 20.689C16.0537 20.613 15.895 20.5582 15.7284 20.559L15.7275 20.5586C15.5167 20.5598 15.2244 20.5028 14.8731 20.3879C14.5261 20.2743 14.1395 20.1101 13.7467 19.9145C13.0205 19.5527 12.2932 19.0902 11.7704 18.6534C11.8966 18.0238 12.0829 17.3845 12.3175 16.7486C13.0529 17.8468 14.1679 18.913 15.591 19.6833L15.9265 19.857C16.0944 19.9399 16.2752 19.9752 16.447 19.9239C16.6244 19.8708 16.7394 19.7408 16.795 19.6015C16.8944 19.3522 16.8298 18.9982 16.55 18.8238C15.8498 18.3878 15.1994 17.6934 14.6144 16.9212C14.0723 16.2053 13.5991 15.4392 13.1999 14.781C13.4147 14.3758 13.6439 13.9806 13.8862 13.6036C14.4871 14.8459 15.4282 16.1781 16.4958 17.1673L16.7405 17.3857C16.8838 17.5098 17.0492 17.5915 17.2264 17.5909C17.4107 17.5902 17.5599 17.5002 17.655 17.377C17.8289 17.1516 17.8377 16.7922 17.6112 16.5506L17.6116 16.5497C16.5541 15.418 15.5871 13.3937 15.1211 11.9514C15.4752 11.5469 15.8347 11.1896 16.1932 10.8909C16.4129 11.5592 16.7153 12.2048 17.0769 12.7605L17.0774 12.7617C17.1797 12.918 17.3242 13.0424 17.5119 13.0702C17.7005 13.0981 17.8583 13.0174 17.9614 12.9209C18.0635 12.8252 18.1347 12.6963 18.1647 12.5641C18.1945 12.4327 18.1901 12.2654 18.0955 12.1165L18.095 12.1152C17.7367 11.5573 17.548 10.8284 17.4873 10.0739C17.848 9.92626 18.1789 9.86216 18.4772 9.88719L18.4781 9.88758C19.1171 9.93898 19.7193 10.0887 20.2822 10.3185C20.3415 10.9016 20.3514 11.5653 20.2605 12.2028C20.1603 12.9063 19.9448 13.5537 19.5741 14.0289C19.3577 14.3048 19.3717 14.6855 19.589 14.9119C19.7053 15.033 19.8768 15.1015 20.067 15.069C20.2468 15.0381 20.4014 14.9245 20.5279 14.7712C21.3402 13.7888 21.8441 12.5328 21.974 11.3353C22.5105 11.7713 22.9972 12.2876 23.4288 12.8645C22.663 14.4452 21.3317 16.244 19.8797 17.368L19.8793 17.3689C19.7348 17.4811 19.6377 17.6387 19.6411 17.8254C19.6444 17.9989 19.7341 18.1361 19.825 18.225C19.9172 18.3152 20.0375 18.3826 20.163 18.4126C20.2745 18.4392 20.4302 18.4436 20.5698 18.3565C22.194 17.4576 23.544 15.9464 24.3841 14.4106C24.6765 14.9834 24.9233 15.5865 25.1198 16.2019C24.4216 17.3056 23.2961 18.3243 21.2626 19.2728L20.8282 19.4681C20.6634 19.5401 20.5232 19.6405 20.4317 19.7695C20.3381 19.9017 20.2909 20.075 20.3518 20.2491C20.4113 20.4191 20.5516 20.5258 20.6981 20.5789C20.8446 20.6318 21.0154 20.6403 21.1941 20.6116C23.2112 20.2904 24.5992 19.376 25.6118 18.394C25.6967 19.0551 25.7227 19.7084 25.6897 20.3334C24.6909 21.1091 23.068 21.4631 21.2496 21.2717L21.25 21.2708C21.0918 21.2539 20.9543 21.2514 20.8396 21.2667C20.7329 21.281 20.5964 21.3177 20.4972 21.4244C20.3797 21.551 20.3749 21.7059 20.4044 21.8186C20.431 21.9197 20.4882 22.0066 20.5376 22.0704C20.6395 22.202 20.7852 22.3295 20.9084 22.4247C21.0286 22.5174 21.1598 22.6051 21.2454 22.6438L21.2481 22.645C21.7246 22.8546 22.5908 22.9771 23.4742 22.9167C24.0782 22.8753 24.7276 22.7463 25.2898 22.4749C24.9951 23.3222 24.5445 24.0341 23.9314 24.5451C23.1967 25.1573 22.2055 25.5039 20.9134 25.4294L20.6507 25.4088C20.5317 25.3972 20.2123 25.3875 19.7962 25.1869C19.3948 24.9934 18.8896 24.6118 18.4125 23.8441C18.4447 23.1722 18.5384 22.5082 18.6963 21.8055L18.9092 20.8565L18.1983 21.5205C18.176 21.5414 18.1234 21.5646 18.0617 21.5579C18.0119 21.5525 17.9496 21.5266 17.8961 21.4368L17.512 20.7924L17.3448 21.5238C17.1499 22.3807 17.1088 23.2045 17.1391 24.0363C16.8888 24.3162 16.6139 24.5371 16.2972 24.6709C15.9534 24.8161 15.5438 24.8687 15.0384 24.7683C14.7156 24.7042 14.4194 24.62 14.1492 24.5185L13.8877 24.4121Z"
      stroke="currentColor"
      strokeWidth=".8"
      fill="var(--icon-accent, none)"
      fillOpacity="0.3"
    />
    {/* Fern — top-right cell */}
    <path
      d="M37.8877 24.4121C36.284 23.6982 35.6145 22.2754 35.5868 20.528C36.7011 21.2808 38.1521 21.8427 39.4554 21.7853L39.7349 21.7622C39.9726 21.7475 40.1847 21.698 40.3319 21.5801C40.4112 21.5165 40.4746 21.4301 40.5023 21.3231C40.5296 21.2174 40.5155 21.1165 40.4844 21.0341C40.4255 20.8783 40.2991 20.7623 40.1788 20.689C40.0537 20.613 39.895 20.5582 39.7284 20.559L39.7275 20.5586C39.5167 20.5598 39.2244 20.5028 38.8731 20.3879C38.5261 20.2743 38.1395 20.1101 37.7467 19.9145C37.0205 19.5527 36.2932 19.0902 35.7704 18.6534C35.8966 18.0238 36.0829 17.3845 36.3175 16.7486C37.0529 17.8468 38.1679 18.913 39.591 19.6833L39.9265 19.857C40.0944 19.9399 40.2752 19.9752 40.447 19.9239C40.6244 19.8708 40.7394 19.7408 40.795 19.6015C40.8944 19.3522 40.8298 18.9982 40.55 18.8238C39.8498 18.3878 39.1994 17.6934 38.6144 16.9212C38.0723 16.2053 37.5991 15.4392 37.1999 14.781C37.4147 14.3758 37.6439 13.9806 37.8862 13.6036C38.4871 14.8459 39.4282 16.1781 40.4958 17.1673L40.7405 17.3857C40.8838 17.5098 41.0492 17.5915 41.2264 17.5909C41.4107 17.5902 41.5599 17.5002 41.655 17.377C41.8289 17.1516 41.8377 16.7922 41.6112 16.5506L41.6116 16.5497C40.5541 15.418 39.5871 13.3937 39.1211 11.9514C39.4752 11.5469 39.8347 11.1896 40.1932 10.8909C40.4129 11.5592 40.7153 12.2048 41.0769 12.7605L41.0774 12.7617C41.1797 12.918 41.3242 13.0424 41.5119 13.0702C41.7005 13.0981 41.8583 13.0174 41.9614 12.9209C42.0635 12.8252 42.1347 12.6963 42.1647 12.5641C42.1945 12.4327 42.1901 12.2654 42.0955 12.1165L42.095 12.1152C41.7367 11.5573 41.548 10.8284 41.4873 10.0739C41.848 9.92626 42.1789 9.86216 42.4772 9.88719L42.4781 9.88758C43.1171 9.93898 43.7193 10.0887 44.2822 10.3185C44.3415 10.9016 44.3514 11.5653 44.2605 12.2028C44.1603 12.9063 43.9448 13.5537 43.5741 14.0289C43.3577 14.3048 43.3717 14.6855 43.589 14.9119C43.7053 15.033 43.8768 15.1015 44.067 15.069C44.2468 15.0381 44.4014 14.9245 44.5279 14.7712C45.3402 13.7888 45.8441 12.5328 45.974 11.3353C46.5105 11.7713 46.9972 12.2876 47.4288 12.8645C46.663 14.4452 45.3317 16.244 43.8797 17.368L43.8793 17.3689C43.7348 17.4811 43.6377 17.6387 43.6411 17.8254C43.6444 17.9989 43.7341 18.1361 43.825 18.225C43.9172 18.3152 44.0375 18.3826 44.163 18.4126C44.2745 18.4392 44.4302 18.4436 44.5698 18.3565C46.194 17.4576 47.544 15.9464 48.3841 14.4106C48.6765 14.9834 48.9233 15.5865 49.1198 16.2019C48.4216 17.3056 47.2961 18.3243 45.2626 19.2728L44.8282 19.4681C44.6634 19.5401 44.5232 19.6405 44.4317 19.7695C44.3381 19.9017 44.2909 20.075 44.3518 20.2491C44.4113 20.4191 44.5516 20.5258 44.6981 20.5789C44.8446 20.6318 45.0154 20.6403 45.1941 20.6116C47.2112 20.2904 48.5992 19.376 49.6118 18.394C49.6967 19.0551 49.7227 19.7084 49.6897 20.3334C48.6909 21.1091 47.068 21.4631 45.2496 21.2717L45.25 21.2708C45.0918 21.2539 44.9543 21.2514 44.8396 21.2667C44.7329 21.281 44.5964 21.3177 44.4972 21.4244C44.3797 21.551 44.3749 21.7059 44.4044 21.8186C44.431 21.9197 44.4882 22.0066 44.5376 22.0704C44.6395 22.202 44.7852 22.3295 44.9084 22.4247C45.0286 22.5174 45.1598 22.6051 45.2454 22.6438L45.2481 22.645C45.7246 22.8546 46.5908 22.9771 47.4742 22.9167C48.0782 22.8753 48.7276 22.7463 49.2898 22.4749C48.9951 23.3222 48.5445 24.0341 47.9314 24.5451C47.1967 25.1573 46.2055 25.5039 44.9134 25.4294L44.6507 25.4088C44.5317 25.3972 44.2123 25.3875 43.7962 25.1869C43.3948 24.9934 42.8896 24.6118 42.4125 23.8441C42.4447 23.1722 42.5384 22.5082 42.6963 21.8055L42.9092 20.8565L42.1983 21.5205C42.176 21.5414 42.1234 21.5646 42.0617 21.5579C42.0119 21.5525 41.9496 21.5266 41.8961 21.4368L41.512 20.7924L41.3448 21.5238C41.1499 22.3807 41.1088 23.2045 41.1391 24.0363C40.8888 24.3162 40.6139 24.5371 40.2972 24.6709C39.9534 24.8161 39.5438 24.8687 39.0384 24.7683C38.7156 24.7042 38.4194 24.62 38.1492 24.5185L37.8877 24.4121Z"
      stroke="currentColor"
      strokeWidth=".8"
      fill="var(--icon-accent, none)"
      fillOpacity="0.3"
    />
    {/* Fern — bottom-left cell */}
    <path
      d="M12.8877 48.4121C11.284 47.6982 10.6145 46.2754 10.5868 44.528C11.7011 45.2808 13.1521 45.8427 14.4554 45.7853L14.7349 45.7622C14.9726 45.7475 15.1847 45.698 15.3319 45.5801C15.4112 45.5165 15.4746 45.4301 15.5023 45.3231C15.5296 45.2174 15.5155 45.1165 15.4844 45.0341C15.4255 44.8783 15.2991 44.7623 15.1788 44.689C15.0537 44.613 14.895 44.5582 14.7284 44.559L14.7275 44.5586C14.5167 44.5598 14.2244 44.5028 13.8731 44.3879C13.5261 44.2743 13.1395 44.1101 12.7467 43.9145C12.0205 43.5527 11.2932 43.0902 10.7704 42.6534C10.8966 42.0238 11.0829 41.3845 11.3175 40.7486C12.0529 41.8468 13.1679 42.913 14.591 43.6833L14.9265 43.857C15.0944 43.9399 15.2752 43.9752 15.447 43.9239C15.6244 43.8708 15.7394 43.7408 15.795 43.6015C15.8944 43.3522 15.8298 42.9982 15.55 42.8238C14.8498 42.3878 14.1994 41.6934 13.6144 40.9212C13.0723 40.2053 12.5991 39.4392 12.1999 38.781C12.4147 38.3758 12.6439 37.9806 12.8862 37.6036C13.4871 38.8459 14.4282 40.1781 15.4958 41.1673L15.7405 41.3857C15.8838 41.5098 16.0492 41.5915 16.2264 41.5909C16.4107 41.5902 16.5599 41.5002 16.655 41.377C16.8289 41.1516 16.8377 40.7922 16.6112 40.5506L16.6116 40.5497C15.5541 39.418 14.5871 37.3937 14.1211 35.9514C14.4752 35.5469 14.8347 35.1896 15.1932 34.8909C15.4129 35.5592 15.7153 36.2048 16.0769 36.7605L16.0774 36.7617C16.1797 36.918 16.3242 37.0424 16.5119 37.0702C16.7005 37.0981 16.8583 37.0174 16.9614 36.9209C17.0635 36.8252 17.1347 36.6963 17.1647 36.5641C17.1945 36.4327 17.1901 36.2654 17.0955 36.1165L17.095 36.1152C16.7367 35.5573 16.548 34.8284 16.4873 34.0739C16.848 33.9263 17.1789 33.8622 17.4772 33.8872L17.4781 33.8876C18.1171 33.939 18.7193 34.0887 19.2822 34.3185C19.3415 34.9016 19.3514 35.5653 19.2605 36.2028C19.1603 36.9063 18.9448 37.5537 18.5741 38.0289C18.3577 38.3048 18.3717 38.6855 18.589 38.9119C18.7053 39.033 18.8768 39.1015 19.067 39.069C19.2468 39.0381 19.4014 38.9245 19.5279 38.7712C20.3402 37.7888 20.8441 36.5328 20.974 35.3353C21.5105 35.7713 21.9972 36.2876 22.4288 36.8645C21.663 38.4452 20.3317 40.244 18.8797 41.368L18.8793 41.3689C18.7348 41.4811 18.6377 41.6387 18.6411 41.8254C18.6444 41.9989 18.7341 42.1361 18.825 42.225C18.9172 42.3152 19.0375 42.3826 19.163 42.4126C19.2745 42.4392 19.4302 42.4436 19.5698 42.3565C21.194 41.4576 22.544 39.9464 23.3841 38.4106C23.6765 38.9834 23.9233 39.5865 24.1198 40.2019C23.4216 41.3056 22.2961 42.3243 20.2626 43.2728L19.8282 43.4681C19.6634 43.5401 19.5232 43.6405 19.4317 43.7695C19.3381 43.9017 19.2909 44.075 19.3518 44.2491C19.4113 44.4191 19.5516 44.5258 19.6981 44.5789C19.8446 44.6318 20.0154 44.6403 20.1941 44.6116C22.2112 44.2904 23.5992 43.376 24.6118 42.394C24.6967 43.0551 24.7227 43.7084 24.6897 44.3334C23.6909 45.1091 22.068 45.4631 20.2496 45.2717L20.25 45.2708C20.0918 45.2539 19.9543 45.2514 19.8396 45.2667C19.7329 45.281 19.5964 45.3177 19.4972 45.4244C19.3797 45.551 19.3749 45.7059 19.4044 45.8186C19.431 45.9197 19.4882 46.0066 19.5376 46.0704C19.6395 46.202 19.7852 46.3295 19.9084 46.4247C20.0286 46.5174 20.1598 46.6051 20.2454 46.6438L20.2481 46.645C20.7246 46.8546 21.5908 46.9771 22.4742 46.9167C23.0782 46.8753 23.7276 46.7463 24.2898 46.4749C23.9951 47.3222 23.5445 48.0341 22.9314 48.5451C22.1967 49.1573 21.2055 49.5039 19.9134 49.4294L19.6507 49.4088C19.5317 49.3972 19.2123 49.3875 18.7962 49.1869C18.3948 48.9934 17.8896 48.6118 17.4125 47.8441C17.4447 47.1722 17.5384 46.5082 17.6963 45.8055L17.9092 44.8565L17.1983 45.5205C17.176 45.5414 17.1234 45.5646 17.0617 45.5579C17.0119 45.5525 16.9496 45.5266 16.8961 45.4368L16.512 44.7924L16.3448 45.5238C16.1499 46.3807 16.1088 47.2045 16.1391 48.0363C15.8888 48.3162 15.6139 48.5371 15.2972 48.6709C14.9534 48.8161 14.5438 48.8687 14.0384 48.7683C13.7156 48.7042 13.4194 48.62 13.1492 48.5185L12.8877 48.4121Z"
      stroke="currentColor"
      strokeWidth=".8"
      fill="var(--icon-accent, none)"
      fillOpacity="0.3"
    />
    {/* Fern — bottom-right cell */}
    <path
      d="M37.8877 48.4121C36.284 47.6982 35.6145 46.2754 35.5868 44.528C36.7011 45.2808 38.1521 45.8427 39.4554 45.7853L39.7349 45.7622C39.9726 45.7475 40.1847 45.698 40.3319 45.5801C40.4112 45.5165 40.4746 45.4301 40.5023 45.3231C40.5296 45.2174 40.5155 45.1165 40.4844 45.0341C40.4255 44.8783 40.2991 44.7623 40.1788 44.689C40.0537 44.613 39.895 44.5582 39.7284 44.559L39.7275 44.5586C39.5167 44.5598 39.2244 44.5028 38.8731 44.3879C38.5261 44.2743 38.1395 44.1101 37.7467 43.9145C37.0205 43.5527 36.2932 43.0902 35.7704 42.6534C35.8966 42.0238 36.0829 41.3845 36.3175 40.7486C37.0529 41.8468 38.1679 42.913 39.591 43.6833L39.9265 43.857C40.0944 43.9399 40.2752 43.9752 40.447 43.9239C40.6244 43.8708 40.7394 43.7408 40.795 43.6015C40.8944 43.3522 40.8298 42.9982 40.55 42.8238C39.8498 42.3878 39.1994 41.6934 38.6144 40.9212C38.0723 40.2053 37.5991 39.4392 37.1999 38.781C37.4147 38.3758 37.6439 37.9806 37.8862 37.6036C38.4871 38.8459 39.4282 40.1781 40.4958 41.1673L40.7405 41.3857C40.8838 41.5098 41.0492 41.5915 41.2264 41.5909C41.4107 41.5902 41.5599 41.5002 41.655 41.377C41.8289 41.1516 41.8377 40.7922 41.6112 40.5506L41.6116 40.5497C40.5541 39.418 39.5871 37.3937 39.1211 35.9514C39.4752 35.5469 39.8347 35.1896 40.1932 34.8909C40.4129 35.5592 40.7153 36.2048 41.0769 36.7605L41.0774 36.7617C41.1797 36.918 41.3242 37.0424 41.5119 37.0702C41.7005 37.0981 41.8583 37.0174 41.9614 36.9209C42.0635 36.8252 42.1347 36.6963 42.1647 36.5641C42.1945 36.4327 42.1901 36.2654 42.0955 36.1165L42.095 36.1152C41.7367 35.5573 41.548 34.8284 41.4873 34.0739C41.848 33.9263 42.1789 33.8622 42.4772 33.8872L42.4781 33.8876C43.1171 33.939 43.7193 34.0887 44.2822 34.3185C44.3415 34.9016 44.3514 35.5653 44.2605 36.2028C44.1603 36.9063 43.9448 37.5537 43.5741 38.0289C43.3577 38.3048 43.3717 38.6855 43.589 38.9119C43.7053 39.033 43.8768 39.1015 44.067 39.069C44.2468 39.0381 44.4014 38.9245 44.5279 38.7712C45.3402 37.7888 45.8441 36.5328 45.974 35.3353C46.5105 35.7713 46.9972 36.2876 47.4288 36.8645C46.663 38.4452 45.3317 40.244 43.8797 41.368L43.8793 41.3689C43.7348 41.4811 43.6377 41.6387 43.6411 41.8254C43.6444 41.9989 43.7341 42.1361 43.825 42.225C43.9172 42.3152 44.0375 42.3826 44.163 42.4126C44.2745 42.4392 44.4302 42.4436 44.5698 42.3565C46.194 41.4576 47.544 39.9464 48.3841 38.4106C48.6765 38.9834 48.9233 39.5865 49.1198 40.2019C48.4216 41.3056 47.2961 42.3243 45.2626 43.2728L44.8282 43.4681C44.6634 43.5401 44.5232 43.6405 44.4317 43.7695C44.3381 43.9017 44.2909 44.075 44.3518 44.2491C44.4113 44.4191 44.5516 44.5258 44.6981 44.5789C44.8446 44.6318 45.0154 44.6403 45.1941 44.6116C47.2112 44.2904 48.5992 43.376 49.6118 42.394C49.6967 43.0551 49.7227 43.7084 49.6897 44.3334C48.6909 45.1091 47.068 45.4631 45.2496 45.2717L45.25 45.2708C45.0918 45.2539 44.9543 45.2514 44.8396 45.2667C44.7329 45.281 44.5964 45.3177 44.4972 45.4244C44.3797 45.551 44.3749 45.7059 44.4044 45.8186C44.431 45.9197 44.4882 46.0066 44.5376 46.0704C44.6395 46.202 44.7852 46.3295 44.9084 46.4247C45.0286 46.5174 45.1598 46.6051 45.2454 46.6438L45.2481 46.645C45.7246 46.8546 46.5908 46.9771 47.4742 46.9167C48.0782 46.8753 48.7276 46.7463 49.2898 46.4749C48.9951 47.3222 48.5445 48.0341 47.9314 48.5451C47.1967 49.1573 46.2055 49.5039 44.9134 49.4294L44.6507 49.4088C44.5317 49.3972 44.2123 49.3875 43.7962 49.1869C43.3948 48.9934 42.8896 48.6118 42.4125 47.8441C42.4447 47.1722 42.5384 46.5082 42.6963 45.8055L42.9092 44.8565L42.1983 45.5205C42.176 45.5414 42.1234 45.5646 42.0617 45.5579C42.0119 45.5525 41.9496 45.5266 41.8961 45.4368L41.512 44.7924L41.3448 45.5238C41.1499 46.3807 41.1088 47.2045 41.1391 48.0363C40.8888 48.3162 40.6139 48.5371 40.2972 48.6709C39.9534 48.8161 39.5438 48.8687 39.0384 48.7683C38.7156 48.7042 38.4194 48.62 38.1492 48.5185L37.8877 48.4121Z"
      stroke="currentColor"
      strokeWidth=".8"
      fill="var(--icon-accent, none)"
      fillOpacity="0.3"
    />
    {/* Grid lines */}
    <line
      x1="6"
      y1="29.75"
      x2="54"
      y2="29.75"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.35"
    />
    <line
      x1="31.25"
      y1="6"
      x2="31.25"
      y2="54"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.35"
    />
    {/* Frame */}
    <rect
      x="6.35"
      y="6.35"
      width="47.3"
      height="47.3"
      rx="2.65"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="var(--icon-fill, none)"
    />
  </svg>
);

/** Atrium Design — large tree with spreading canopy */
export const IconAtrium = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    {/* Arch/atrium frame */}
    <path
      d="M8 60 L8 20 C8 10 18 4 32 4 C46 4 56 10 56 20 L56 60"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="var(--icon-fill, none)"
    />
    {/* Tree trunk */}
    <path
      d="M30 58 C30 48 28 40 32 36 C36 40 34 48 34 58"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="var(--icon-accent, none)"
      fillOpacity="0.2"
    />
    {/* Canopy */}
    <path
      d="M32 34 C26 34 18 30 16 24 C18 22 22 20 26 22 C24 18 22 14 24 12 C26 12 30 14 30 18 C30 14 32 10 34 10 C36 10 38 14 38 18 C38 14 40 12 42 12 C44 14 42 18 40 22 C44 20 48 22 50 24 C48 30 40 34 32 34Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="var(--icon-accent, none)"
      fillOpacity="0.35"
    />
    {/* Ground line */}
    <line
      x1="14"
      y1="58"
      x2="50"
      y2="58"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/** Holiday Decorations — wreath with bow */
export const IconHoliday = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    <circle cx="32" cy="30" r="18" stroke="currentColor" strokeWidth="2.5" fill="var(--icon-fill, none)" />
    <circle cx="32" cy="30" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.3" fill="none" />
    <path d="M32 12 C30 10 28 8 32 6 C34 8 34 10 32 12" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.4" />
    <path d="M46 16 C48 14 50 12 52 16 C50 18 48 16 46 16" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.4" />
    <path d="M50 30 C52 28 54 28 54 32 C52 34 50 32 50 30" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.4" />
    <path d="M46 44 C48 46 50 48 46 48 C44 48 44 46 46 44" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.4" />
    <path d="M18 44 C16 46 14 48 14 44 C16 42 18 42 18 44" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.4" />
    <path d="M14 30 C12 28 10 28 10 32 C12 34 14 32 14 30" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.4" />
    <path d="M18 16 C16 14 14 12 18 12 C20 14 18 16 18 16" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.4" />
    <circle cx="24" cy="14" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="40" cy="14" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="48" cy="24" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="48" cy="38" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="16" cy="24" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="16" cy="38" r="2" fill="currentColor" opacity="0.6" />
    <path d="M26 48 C24 50 22 54 28 54 C30 52 30 50 32 48 C34 50 34 52 36 54 C42 54 40 50 38 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="var(--icon-accent, none)" fillOpacity="0.3" />
    <path d="M30 48 L32 52 L34 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 54 C26 56 24 60 22 62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M36 54 C38 56 40 60 42 62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/** Fresh Florals — bouquet in vase */
export const IconFlorals = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    <path d="M24 40 C22 42 20 50 22 56 C23 58 26 60 32 60 C38 60 41 58 42 56 C44 50 42 42 40 40 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="var(--icon-fill, none)" />
    <ellipse cx="32" cy="40" rx="10" ry="3" stroke="currentColor" strokeWidth="2" fill="var(--icon-fill, none)" />
    <circle cx="32" cy="18" r="5" stroke="currentColor" strokeWidth="2" fill="var(--icon-accent, none)" fillOpacity="0.3" />
    <circle cx="32" cy="18" r="2" fill="currentColor" opacity="0.5" />
    <ellipse cx="32" cy="10" rx="3" ry="4" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.2" />
    <ellipse cx="26" cy="14" rx="3" ry="4" transform="rotate(60 26 14)" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.2" />
    <ellipse cx="38" cy="14" rx="3" ry="4" transform="rotate(-60 38 14)" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.2" />
    <ellipse cx="26" cy="22" rx="3" ry="4" transform="rotate(120 26 22)" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.2" />
    <ellipse cx="38" cy="22" rx="3" ry="4" transform="rotate(-120 38 22)" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.2" />
    <circle cx="20" cy="24" r="4" stroke="currentColor" strokeWidth="1.8" fill="var(--icon-accent, none)" fillOpacity="0.25" />
    <circle cx="20" cy="24" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="44" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.8" fill="var(--icon-accent, none)" fillOpacity="0.25" />
    <circle cx="44" cy="22" r="1.5" fill="currentColor" opacity="0.4" />
    <path d="M32 38 L32 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 34 C28 30 22 28 20 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 32 C36 28 42 26 44 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 34 C26 32 24 34 26 36 C28 36 28 34 28 34" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.3" />
    <path d="M36 30 C38 28 40 30 38 32 C36 32 36 30 36 30" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.3" />
  </svg>
);

/** Plant Maintenance — watering can with droplets */
export const IconMaintenance = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    <path d="M14 28 L14 44 C14 48 18 50 22 50 L38 50 C42 50 44 48 44 44 L44 28 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="var(--icon-fill, none)" />
    <path d="M14 28 L44 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M18 28 C18 20 22 16 30 16 C38 16 42 20 42 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M44 32 L53 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <ellipse cx="56" cy="20" rx="4" ry="3" transform="rotate(-30 56 20)" stroke="currentColor" strokeWidth="2" fill="var(--icon-fill, none)" />
    <path d="M50 28 C50 26 52 24 52 28 C52 30 50 30 50 28" fill="currentColor" opacity="0.5" />
    <path d="M54 30 C54 28 56 26 56 30 C56 32 54 32 54 30" fill="currentColor" opacity="0.4" />
    <path d="M48 32 C48 30 50 28 50 32 C50 34 48 34 48 32" fill="currentColor" opacity="0.3" />
  </svg>
);

/** Sustainability — recycle arrows with water drop/leaf center */
export const IconSustain = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    <path d="M22.5005 9.3075C16.8963 10.5852 11.9934 13.9586 8.79705 18.7359C5.60072 23.5132 4.35325 29.3323 5.31045 35M22.5005 9.3075L15.0004 6.25M22.5005 9.3075L20.0004 16.25M47.6604 41.25C49.2044 38.1429 50.0054 34.7196 50.0005 31.25C50.0005 20.1 41.893 10.8475 31.2505 9.06M47.6604 41.25L55.0005 36.25M47.6604 41.25L43.7505 33.75M8.79045 43.75C10.8447 46.8285 13.6273 49.352 16.8913 51.0965C20.1553 52.841 23.7995 53.7525 27.5005 53.75C33.0363 53.7569 38.3791 51.716 42.5005 48.02M8.79045 43.75H17.5004M8.79045 43.75V52.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28.3346 40.9597C32.8907 40.9597 36.5853 37.129 36.5853 32.4038C36.5853 26.3757 32.3277 21.3597 29.9291 19.0136C29.5062 18.5907 28.9327 18.3532 28.3346 18.3532C27.7366 18.3532 27.163 18.5907 26.7401 19.0136C24.3425 21.3607 20.0849 26.3747 20.0839 32.4038C20.0839 37.129 23.7786 40.9597 28.3346 40.9597Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="var(--icon-accent, none)" fillOpacity="0.25" />
    <path d="M28.3346 40.9597L28.3346 45.0822" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28.3346 40.9597L28.3346 29.9595" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28.3346 25.8351L28.3346 29.9575L31.0842 28.5847" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28.3356 29.9585L25.585 28.5847" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M31.0842 34.0838L29.5645 34.8451C29.1827 35.0361 28.7616 35.1355 28.3346 35.1355C27.9077 35.1355 27.4866 35.0361 27.1047 34.8451L25.585 34.0838" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Expertise — mature tree with deep visible roots */
export const IconExpertise = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    <path d="M8 36 L56 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <path d="M30 36 C30 30 28 26 30 22 M34 36 C34 30 36 26 34 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 20 C26 20 18 16 16 12 C18 10 22 8 26 10 C24 8 24 4 28 4 C30 4 32 6 32 8 C32 6 34 4 36 4 C40 4 40 8 38 10 C42 8 46 10 48 12 C46 16 38 20 32 20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="var(--icon-accent, none)" fillOpacity="0.35" />
    <path d="M24 14 C22 12 22 10 24 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    <path d="M32 12 C32 10 34 8 34 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    <path d="M40 14 C42 12 42 10 40 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    <path d="M30 36 C28 40 24 44 18 48 C14 50 10 50 8 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M24 44 C22 46 18 46 16 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M34 36 C36 40 40 44 46 48 C50 50 54 50 56 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M40 44 C42 46 46 46 48 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M32 36 C32 42 32 50 32 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 44 C30 46 26 48 24 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M32 44 C34 46 38 48 40 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M32 50 C30 52 28 54 26 54" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    <path d="M32 50 C34 52 36 54 38 54" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    <circle cx="8" cy="48" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="56" cy="48" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="32" cy="56" r="1.5" fill="currentColor" opacity="0.3" />
  </svg>
);

/** Quality — shield with leaf emblem */
export const IconQuality = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    <path d="M32 6 L52 14 C54 14 54 16 54 18 L54 32 C54 44 44 54 32 60 C20 54 10 44 10 32 L10 18 C10 16 10 14 12 14 L32 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="var(--icon-fill, none)" />
    <path d="M32 12 L48 18 L48 32 C48 42 40 50 32 54 C24 50 16 42 16 32 L16 18 L32 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.25" fill="none" />
    <path d="M32 44 C28 40 22 32 22 26 C26 24 30 26 32 30 C34 26 38 24 42 26 C42 32 36 40 32 44Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="var(--icon-accent, none)" fillOpacity="0.35" />
    <path d="M32 44 L32 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M32 36 L28 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M32 36 L36 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M32 32 L26 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M32 32 L38 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
  </svg>
);

/** Reusable Organic-style icon wrapper */
// eslint-disable-next-line no-unused-vars
export const OrganicIcon = ({ Icon, size = "w-16 h-16", iconSize = "w-10 h-10" }) => (
  <div
    className={`${size} flex items-center justify-center`}
    style={{
      background: "linear-gradient(135deg, #f3f7ec 0%, #e5efd5 100%)",
      border: "2px solid #9daf6f",
      borderRadius: "47% 53% 52% 48% / 46% 52% 48% 54%",
    }}
  >
    <Icon
      className={`${iconSize} text-forest-700`}
      style={{ "--icon-fill": "none", "--icon-accent": "#738754" }}
    />
  </div>
);
