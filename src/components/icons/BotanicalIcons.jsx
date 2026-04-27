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

/** Green Walls — single botanical plant motif in framed square */
export const IconGreenWall = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    <path
      d="M20.8197 47.4767L20.8188 47.4764C16.7151 46.1045 14.8258 42.696 14.4592 38.4115C17.416 40.1186 21.3481 41.2267 24.5429 40.5227C25.0584 40.4377 25.4664 40.2866 25.7225 40.0376C25.8609 39.9028 25.9597 39.7341 25.9906 39.5384C26.0211 39.3448 25.9786 39.1652 25.9056 39.0168C25.7659 38.7331 25.4989 38.5239 25.2337 38.3957C24.9608 38.2638 24.6265 38.1853 24.2929 38.2191L24.2917 38.2197C23.7713 38.2731 23.0584 38.2002 22.2152 38.0116C21.3786 37.8245 20.4424 37.5304 19.488 37.1646C17.6743 36.4695 15.8293 35.5249 14.5022 34.5981C14.6641 32.9216 14.9985 31.1989 15.4757 29.4803C17.5316 32.1281 20.6952 34.623 24.6516 36.1156L24.6507 36.1153C25.0213 36.2559 25.3822 36.2844 25.6948 36.1571C26.0158 36.0263 26.2074 35.7627 26.2878 35.4863C26.435 34.9804 26.2373 34.3058 25.6706 34.0245C23.9269 33.159 22.2557 31.6827 20.7318 30.0285C19.2816 28.4541 17.988 26.7439 16.9069 25.2949C17.38 24.1366 17.91 23.0083 18.4778 21.9333C20.2379 24.9408 23.0294 28.165 26.0266 30.2811L26.0257 30.2808C26.354 30.5141 26.6976 30.6364 27.032 30.603C27.3774 30.5685 27.6415 30.3743 27.7991 30.1234C28.0744 29.6848 28.0467 29.0383 27.6407 28.6085L27.5549 28.5251C24.8033 26.0959 22.0772 21.542 20.6943 18.3042C21.5246 17.1366 22.3909 16.1069 23.269 15.2537C23.9319 16.8381 24.8132 18.3526 25.8211 19.6164L25.9158 19.7263C26.1431 19.9707 26.4148 20.1289 26.7215 20.1445C27.0727 20.1622 27.3538 19.9866 27.5366 19.7791C27.7178 19.5731 27.8339 19.3052 27.8681 19.0376C27.9021 18.7712 27.8605 18.454 27.6578 18.1939L27.6563 18.1924C26.6468 16.9107 26.0296 15.1712 25.728 13.3671C26.6029 12.8827 27.4372 12.6212 28.2197 12.6115L28.2218 12.6112C29.7782 12.5864 31.265 12.8183 32.6733 13.256C32.9576 14.6285 33.1376 16.2247 33.067 17.7824C32.9916 19.4443 32.6343 21.0248 31.8574 22.2463C31.4776 22.8401 31.5889 23.5825 32.0441 23.9737C32.2846 24.1802 32.6157 24.2775 32.9663 24.1823C33.3013 24.0911 33.5921 23.842 33.8306 23.4888C35.5403 20.9612 36.4091 17.8189 36.3506 14.9645C37.8753 15.9242 39.2782 17.136 40.5349 18.5334C39.1731 22.2721 36.5946 26.6423 33.5673 29.612L33.2658 29.901C32.9976 30.1538 32.8522 30.4694 32.8913 30.8092C32.9282 31.1289 33.1183 31.3752 33.3166 31.535C33.517 31.6963 33.7694 31.8072 34.0217 31.8424C34.2538 31.8747 34.5517 31.8482 34.7918 31.6533C38.4076 29.1672 41.2224 25.2505 42.7657 21.4433C43.6904 22.8409 44.4927 24.3436 45.1514 25.8946C43.7738 28.6714 41.3726 31.3239 36.8255 34.0041L35.8657 34.5525C35.5272 34.741 35.2642 34.9753 35.1095 35.2451C34.9517 35.5203 34.9018 35.8502 35.0426 36.1548C35.1806 36.4533 35.458 36.6333 35.7594 36.7104C35.9854 36.7681 36.2406 36.7738 36.5134 36.7318L36.7909 36.6741C41.5179 35.4465 44.5301 32.8923 46.6325 30.3136C47.051 32.0162 47.2975 33.7203 47.3607 35.3585C45.1886 37.4643 41.4283 38.6704 37.1211 38.6331L37.1218 38.6343C36.763 38.6308 36.4663 38.6531 36.231 38.7081C36.0081 38.7602 35.7666 38.8579 35.6107 39.0619C35.4295 39.2993 35.4442 39.5679 35.5183 39.7692C35.5862 39.9534 35.7119 40.114 35.8311 40.2406C36.0749 40.4995 36.4184 40.7468 36.7166 40.9343C37.0098 41.1185 37.3131 41.2784 37.4926 41.3397L37.4972 41.3412C38.5912 41.7015 40.5685 41.7952 42.5653 41.4636C44.1173 41.2059 45.7532 40.6786 47.0343 39.7594C46.5716 42.0462 45.6331 44.0273 44.179 45.4975C42.4725 47.2228 40.0162 48.2873 36.6645 48.2804L36.6636 48.2801C36.3894 48.2798 35.6143 48.329 34.5701 47.9442C33.5497 47.5681 32.2469 46.7645 30.9394 45.0319C30.8577 43.4403 30.9281 41.8568 31.1399 40.1689L31.3264 38.683L30.3355 39.8066C30.1331 40.036 29.6124 40.143 29.2613 39.6647L28.5776 38.7327L28.4306 39.8792C28.1713 41.9022 28.2636 43.8156 28.5264 45.7412C27.9871 46.492 27.3593 47.1093 26.5994 47.5205C25.8973 47.9002 25.0615 48.1165 24.0414 48.082L23.5934 48.0513C22.5702 47.9489 21.6471 47.7536 20.8197 47.4767Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="var(--icon-accent, none)"
      fillOpacity="0.25"
    />
    <rect
      x="6.35"
      y="6.35"
      width="47.3"
      height="47.3"
      rx="2.65"
      stroke="currentColor"
      strokeWidth="1.5"
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

/** Color Program — bouquet in vase */
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

/** Moss Walls — organic wall grid with rounded moss patches */
export const IconMossWall = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    {/* Wall frame */}
    <rect x="8" y="10" width="48" height="44" rx="3" stroke="currentColor" strokeWidth="2.5" fill="var(--icon-fill, none)" />
    {/* Moss patch top-left */}
    <ellipse cx="20" cy="22" rx="7" ry="5" stroke="currentColor" strokeWidth="1.8" fill="var(--icon-accent, none)" fillOpacity="0.35" />
    <path d="M15 22 C15 18 19 16 20 16 C21 16 25 18 25 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    {/* Moss patch top-right */}
    <ellipse cx="44" cy="20" rx="8" ry="6" stroke="currentColor" strokeWidth="1.8" fill="var(--icon-accent, none)" fillOpacity="0.35" />
    <path d="M38 20 C38 15 42 13 44 13 C46 13 50 15 50 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    {/* Moss patch center */}
    <ellipse cx="30" cy="36" rx="9" ry="6" stroke="currentColor" strokeWidth="1.8" fill="var(--icon-accent, none)" fillOpacity="0.4" />
    <path d="M23 36 C23 30 27 28 30 28 C33 28 37 30 37 36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    {/* Small moss accent bottom-left */}
    <ellipse cx="17" cy="44" rx="5" ry="4" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.3" />
    {/* Small moss accent bottom-right */}
    <ellipse cx="48" cy="46" rx="5" ry="4" stroke="currentColor" strokeWidth="1.5" fill="var(--icon-accent, none)" fillOpacity="0.3" />
  </svg>
);

/** Wellbeing — figure in lotus meditation pose with lotus flower behind */
export const IconWellbeing = ({ className = "", style = {}, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    {/* Lotus petals — drawn first so they sit behind the figure */}
    {/* Top petal */}
    <path d="M32 40 C29 32 29 22 32 15 C35 22 35 32 32 40Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      fill="var(--icon-accent, none)" fillOpacity="0.3" />
    {/* Upper-left petal */}
    <path d="M32 40 C24 37 16 32 11 26 C15 19 23 22 32 40Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      fill="var(--icon-accent, none)" fillOpacity="0.25" />
    {/* Upper-right petal */}
    <path d="M32 40 C40 37 48 32 53 26 C49 19 41 22 32 40Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      fill="var(--icon-accent, none)" fillOpacity="0.25" />
    {/* Lower-left petal */}
    <path d="M32 40 C24 42 15 45 11 51 C15 57 23 55 32 40Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      fill="var(--icon-accent, none)" fillOpacity="0.2" />
    {/* Lower-right petal */}
    <path d="M32 40 C40 42 49 45 53 51 C49 57 41 55 32 40Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      fill="var(--icon-accent, none)" fillOpacity="0.2" />
    {/* Lotus center */}
    <circle cx="32" cy="40" r="3"
      stroke="currentColor" strokeWidth="1.5"
      fill="var(--icon-accent, none)" fillOpacity="0.45" />

    {/* Figure — drawn on top of the lotus */}
    {/* Head */}
    <circle cx="32" cy="13" r="5"
      stroke="currentColor" strokeWidth="2.2"
      fill="var(--icon-fill, none)" />
    {/* Torso */}
    <path d="M27 20 C24 26 24 32 26 38 L38 38 C40 32 40 26 37 20"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      fill="none" />
    {/* Legs in lotus position */}
    <path d="M26 38 C20 40 14 46 14 54 C18 58 26 57 32 55 C38 57 46 58 50 54 C50 46 44 40 38 38"
      stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round"
      fill="none" />
    {/* Crossed feet detail */}
    <path d="M21 52 C25 50 29 51 32 51 C35 51 39 50 43 52"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      opacity="0.55" />
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
