import React from "react";
import { Link } from 'react-router-dom';

function FirstRow(props) {
  return (
    <div
      style={{
        display: "flex",
        fleDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: "-400px",
      }}
    >
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3 СЛОВА О РОССИИ */}
      <Link style={{ alignSelf: "flex-end", cursor: "pointer", width: "731px", height: "163px", marginRight: "20px" }} to="/russia">
        <svg
          style={{ zIndex: "-1" }}
          width="732"
          height="163"
          viewBox="0 0 732 163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.33333"
            y="161.333"
            width="160"
            height="728.381"
            transform="rotate(-90 1.33333 161.333)"
            fill="#D2D2D2"
            stroke="#0000FF"
            strokeWidth="2.66667"
          />
          <path
            d="M541.614 20.6665V141.333"
            stroke="#0000FF"
            strokeWidth="2.66667"
          />
          <path
            d="M568.295 20.6665V141.333"
            stroke="#0000FF"
            strokeWidth="2.66667"
          />
          <path
            d="M352.183 20.6665V141.333"
            stroke="#0000FF"
            strokeWidth="2.66667"
          />
          <path
            d="M378.863 20.6665V141.333"
            stroke="#0000FF"
            strokeWidth="2.66667"
          />
          <path
            d="M162.751 20.6665V141.333"
            stroke="#0000FF"
            strokeWidth="2.66667"
          />
          <path
            d="M189.431 20.6665V141.333"
            stroke="#0000FF"
            strokeWidth="2.66667"
          />
          <path
            d="M32.8066 89.9062L37.4316 89.1562C38.39 95.1562 40.8171 98.1562 44.7129 98.1562C46.8171 98.1562 48.64 97.2708 50.1816 95.5C51.7233 93.7083 52.4941 91.3958 52.4941 88.5625C52.4941 85.8958 51.7858 83.75 50.3691 82.125C48.9525 80.5 47.2129 79.6875 45.1504 79.6875C44.2754 79.6875 43.1921 79.8958 41.9004 80.3125L42.4316 75.375L43.1504 75.4375C45.4212 75.4375 47.265 74.7396 48.6816 73.3438C50.0983 71.9479 50.8066 70.0833 50.8066 67.75C50.8066 65.6042 50.2129 63.8854 49.0254 62.5938C47.8379 61.2812 46.39 60.625 44.6816 60.625C42.9108 60.625 41.4108 61.3125 40.1816 62.6875C38.9733 64.0417 38.2025 66.1042 37.8691 68.875L33.2754 67.875C33.8587 63.9583 35.1712 61 37.2129 59C39.2546 57 41.7233 56 44.6191 56C47.6608 56 50.2441 57.125 52.3691 59.375C54.4941 61.625 55.5566 64.4583 55.5566 67.875C55.5566 69.9583 55.0983 71.8021 54.1816 73.4062C53.2858 75.0104 52.0254 76.2708 50.4004 77.1875C51.9004 77.6042 53.14 78.2917 54.1191 79.25C55.0983 80.2083 55.89 81.4896 56.4941 83.0938C57.0983 84.6979 57.4004 86.4896 57.4004 88.4688C57.4004 92.6771 56.1608 96.125 53.6816 98.8125C51.2025 101.479 48.2337 102.812 44.7754 102.812C41.5671 102.812 38.8483 101.646 36.6191 99.3125C34.39 96.9792 33.1191 93.8438 32.8066 89.9062ZM95.7129 89.8438L100.244 90.5625C99.7233 94.5208 98.4108 97.5417 96.3066 99.625C94.2233 101.708 91.7129 102.75 88.7754 102.75C85.2129 102.75 82.2754 101.292 79.9629 98.375C77.6712 95.4375 76.5254 91.1042 76.5254 85.375C76.5254 79.6042 77.6816 75.2812 79.9941 72.4062C82.3275 69.5104 85.3171 68.0625 88.9629 68.0625C91.7754 68.0625 94.14 68.9375 96.0566 70.6875C97.9941 72.4375 99.2337 75.0625 99.7754 78.5625L95.3066 79.4062C94.8691 77.1562 94.1087 75.4792 93.0254 74.375C91.9421 73.25 90.64 72.6875 89.1191 72.6875C86.8483 72.6875 84.9629 73.6979 83.4629 75.7188C81.9837 77.7188 81.2441 80.9062 81.2441 85.2812C81.2441 89.8021 81.9525 93.0729 83.3691 95.0938C84.8066 97.1146 86.64 98.125 88.8691 98.125C90.6191 98.125 92.1087 97.4583 93.3379 96.125C94.5879 94.7708 95.3796 92.6771 95.7129 89.8438ZM106.432 68.8125H127.869V102H123.275V73.4688H111.057V90C111.057 93.7708 110.952 96.3021 110.744 97.5938C110.557 98.8854 109.984 99.9792 109.025 100.875C108.088 101.771 106.744 102.219 104.994 102.219C103.911 102.219 102.692 102.146 101.338 102V97.2812C103.505 97.2604 104.786 97.1875 105.182 97.0625C105.577 96.9375 105.88 96.625 106.088 96.125C106.317 95.6042 106.432 93.7917 106.432 90.6875V68.8125Z"
            fill="#0000FF"
          />
          <path
            d="M231.107 84.7393C231.107 79.0101 232.305 74.6872 234.701 71.7705C237.118 68.8538 240.17 67.3955 243.857 67.3955C247.482 67.3955 250.514 68.8538 252.951 71.7705C255.389 74.6872 256.607 78.8955 256.607 84.3955C256.607 90.3538 255.41 94.7913 253.014 97.708C250.618 100.625 247.566 102.083 243.857 102.083C240.212 102.083 237.17 100.625 234.732 97.708C232.316 94.7705 231.107 90.4476 231.107 84.7393ZM235.826 84.7393C235.826 89.0309 236.607 92.2288 238.17 94.333C239.732 96.4163 241.67 97.458 243.982 97.458C246.149 97.458 248.003 96.4059 249.545 94.3018C251.107 92.1768 251.889 88.9893 251.889 84.7393C251.889 80.4684 251.107 77.2913 249.545 75.208C247.982 73.1038 246.045 72.0518 243.732 72.0518C241.545 72.0518 239.68 73.1038 238.139 75.208C236.597 77.3122 235.826 80.4893 235.826 84.7393ZM262.107 68.1455H272.732C275.149 68.1455 276.993 68.3747 278.264 68.833C279.555 69.2913 280.701 70.2393 281.701 71.6768C282.722 73.0934 283.232 74.8538 283.232 76.958C283.232 80.1247 282.149 82.4893 279.982 84.0518C282.962 85.3851 284.451 88.0518 284.451 92.0518C284.451 94.6143 283.691 96.8018 282.17 98.6143C280.649 100.427 278.055 101.333 274.389 101.333H262.107V68.1455ZM266.701 82.1143H271.639C273.597 82.1143 274.941 81.9893 275.67 81.7393C276.42 81.4893 277.087 80.9893 277.67 80.2393C278.253 79.4684 278.545 78.5309 278.545 77.4268C278.545 75.6768 278.024 74.4684 276.982 73.8018C275.962 73.1351 274.232 72.8018 271.795 72.8018H266.701V82.1143ZM266.701 96.708H272.795C275.399 96.708 277.201 96.3122 278.201 95.5205C279.201 94.708 279.701 93.458 279.701 91.7705C279.701 89.9788 279.17 88.6976 278.107 87.9268C277.066 87.1351 275.139 86.7393 272.326 86.7393H266.701V96.708ZM307.639 97.2393C306.097 98.8434 304.493 100.052 302.826 100.864C301.16 101.677 299.43 102.083 297.639 102.083C294.805 102.083 292.545 101.229 290.857 99.5205C289.17 97.8122 288.326 95.5101 288.326 92.6143C288.326 90.6976 288.722 88.9997 289.514 87.5205C290.305 86.0413 291.389 84.8851 292.764 84.0518C294.139 83.2184 296.222 82.6038 299.014 82.208C302.764 81.6663 305.514 81.0205 307.264 80.2705L307.295 78.833C307.295 76.5622 306.889 74.9684 306.076 74.0518C304.93 72.7184 303.17 72.0518 300.795 72.0518C298.649 72.0518 297.045 72.4997 295.982 73.3955C294.92 74.2705 294.139 75.9268 293.639 78.3643L289.107 77.6143C289.753 74.0518 291.055 71.458 293.014 69.833C294.993 68.208 297.816 67.3955 301.482 67.3955C304.337 67.3955 306.576 67.9372 308.201 69.0205C309.826 70.083 310.847 71.4059 311.264 72.9893C311.701 74.5726 311.92 76.8851 311.92 79.9268V87.4268C311.92 92.6768 312.014 95.9893 312.201 97.3643C312.41 98.7184 312.805 100.041 313.389 101.333H308.576C308.097 100.187 307.785 98.8226 307.639 97.2393ZM307.264 84.6768C305.576 85.5101 303.066 86.2184 299.732 86.8018C297.795 87.1351 296.441 87.5205 295.67 87.958C294.899 88.3747 294.295 88.9788 293.857 89.7705C293.441 90.5413 293.232 91.4372 293.232 92.458C293.232 94.0413 293.722 95.3122 294.701 96.2705C295.68 97.208 297.035 97.6768 298.764 97.6768C300.41 97.6768 301.899 97.2497 303.232 96.3955C304.587 95.5413 305.597 94.4059 306.264 92.9893C306.93 91.5518 307.264 89.4684 307.264 86.7393V84.6768Z"
            fill="#0000FF"
          />
          <path
            d="M409.868 86.0728C409.868 80.3436 411.066 76.0207 413.462 73.104C415.879 70.1873 418.931 68.729 422.618 68.729C426.243 68.729 429.274 70.1873 431.712 73.104C434.149 76.0207 435.368 80.229 435.368 85.729C435.368 91.6873 434.17 96.1248 431.774 99.0415C429.379 101.958 426.326 103.417 422.618 103.417C418.972 103.417 415.931 101.958 413.493 99.0415C411.076 96.104 409.868 91.7811 409.868 86.0728ZM414.587 86.0728C414.587 90.3644 415.368 93.5623 416.931 95.6665C418.493 97.7498 420.431 98.7915 422.743 98.7915C424.91 98.7915 426.764 97.7394 428.306 95.6353C429.868 93.5103 430.649 90.3228 430.649 86.0728C430.649 81.8019 429.868 78.6248 428.306 76.5415C426.743 74.4373 424.806 73.3853 422.493 73.3853C420.306 73.3853 418.441 74.4373 416.899 76.5415C415.358 78.6457 414.587 81.8228 414.587 86.0728ZM456.087 102.667V56.854H470.243C473.576 56.854 476.035 57.1457 477.618 57.729C479.785 58.5207 481.514 59.9894 482.806 62.1353C484.097 64.2811 484.743 66.9165 484.743 70.0415C484.743 74.1665 483.691 77.5311 481.587 80.1353C479.483 82.7394 475.847 84.0415 470.681 84.0415H461.056V102.667H456.087ZM461.056 78.6353H470.774C473.837 78.6353 476.076 77.9478 477.493 76.5728C478.91 75.1769 479.618 73.0832 479.618 70.2915C479.618 68.479 479.264 66.9269 478.556 65.6353C477.868 64.3436 477.024 63.4582 476.024 62.979C475.045 62.4998 473.264 62.2603 470.681 62.2603H461.056V78.6353ZM488.681 86.0728C488.681 80.3436 489.879 76.0207 492.274 73.104C494.691 70.1873 497.743 68.729 501.431 68.729C505.056 68.729 508.087 70.1873 510.524 73.104C512.962 76.0207 514.181 80.229 514.181 85.729C514.181 91.6873 512.983 96.1248 510.587 99.0415C508.191 101.958 505.139 103.417 501.431 103.417C497.785 103.417 494.743 101.958 492.306 99.0415C489.889 96.104 488.681 91.7811 488.681 86.0728ZM493.399 86.0728C493.399 90.3644 494.181 93.5623 495.743 95.6665C497.306 97.7498 499.243 98.7915 501.556 98.7915C503.722 98.7915 505.576 97.7394 507.118 95.6353C508.681 93.5103 509.462 90.3228 509.462 86.0728C509.462 81.8019 508.681 78.6248 507.118 76.5415C505.556 74.4373 503.618 73.3853 501.306 73.3853C499.118 73.3853 497.254 74.4373 495.712 76.5415C494.17 78.6457 493.399 81.8228 493.399 86.0728Z"
            fill="#0000FF"
          />
          <path
            d="M611.929 90.5103L616.461 91.229C615.94 95.1873 614.627 98.2082 612.523 100.292C610.44 102.375 607.929 103.417 604.992 103.417C601.429 103.417 598.492 101.958 596.179 99.0415C593.888 96.104 592.742 91.7707 592.742 86.0415C592.742 80.2707 593.898 75.9478 596.211 73.0728C598.544 70.1769 601.534 68.729 605.179 68.729C607.992 68.729 610.356 69.604 612.273 71.354C614.211 73.104 615.45 75.729 615.992 79.229L611.523 80.0728C611.086 77.8228 610.325 76.1457 609.242 75.0415C608.159 73.9165 606.856 73.354 605.336 73.354C603.065 73.354 601.179 74.3644 599.679 76.3853C598.2 78.3853 597.461 81.5728 597.461 85.9478C597.461 90.4686 598.169 93.7394 599.586 95.7603C601.023 97.7811 602.856 98.7915 605.086 98.7915C606.836 98.7915 608.325 98.1248 609.554 96.7915C610.804 95.4373 611.596 93.3436 611.929 90.5103ZM638.179 90.5103L642.711 91.229C642.19 95.1873 640.877 98.2082 638.773 100.292C636.69 102.375 634.179 103.417 631.242 103.417C627.679 103.417 624.742 101.958 622.429 99.0415C620.138 96.104 618.992 91.7707 618.992 86.0415C618.992 80.2707 620.148 75.9478 622.461 73.0728C624.794 70.1769 627.784 68.729 631.429 68.729C634.242 68.729 636.606 69.604 638.523 71.354C640.461 73.104 641.7 75.729 642.242 79.229L637.773 80.0728C637.336 77.8228 636.575 76.1457 635.492 75.0415C634.409 73.9165 633.106 73.354 631.586 73.354C629.315 73.354 627.429 74.3644 625.929 76.3853C624.45 78.3853 623.711 81.5728 623.711 85.9478C623.711 90.4686 624.419 93.7394 625.836 95.7603C627.273 97.7811 629.106 98.7915 631.336 98.7915C633.086 98.7915 634.575 98.1248 635.804 96.7915C637.054 95.4373 637.846 93.3436 638.179 90.5103ZM646.679 69.479H651.273V94.7915L664.086 69.479H669.054V102.667H664.461V77.5103L651.648 102.667H646.679V69.479ZM676.054 69.479H680.648V94.7915L693.461 69.479H698.429V102.667H693.836V77.5103L681.023 102.667H676.054V69.479Z"
            fill="#0000FF"
          />
        </svg>
      </Link>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ЮТУБ */}
      <svg
        style={{ zIndex: "-1", marginRight: "20px" }}
        width="543"
        height="352"
        viewBox="0 0 543 352"
        fill="none"
        a
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_232:2073" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M352.591 0H189.84V189.333H0.408203V352H542.023V189.333H352.591V0Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M352.591 0H189.84V189.333H0.408203V352H542.023V189.333H352.591V0Z"
          fill="#D2D2D2"
        />
        <path
          d="M189.84 0V-2.66667H187.173V0H189.84ZM352.591 0H355.258V-2.66667H352.591V0ZM189.84 189.333V192H192.506V189.333H189.84ZM0.408203 189.333V186.667H-2.25846V189.333H0.408203ZM0.408203 352H-2.25846V354.667H0.408203V352ZM542.023 352V354.667H544.69V352H542.023ZM542.023 189.333H544.69V186.667H542.023V189.333ZM352.591 189.333H349.924V192H352.591V189.333ZM189.84 2.66667H352.591V-2.66667H189.84V2.66667ZM192.506 189.333V0H187.173V189.333H192.506ZM0.408203 192H189.84V186.667H0.408203V192ZM3.07487 352V189.333H-2.25846V352H3.07487ZM542.023 349.333H0.408203V354.667H542.023V349.333ZM539.357 189.333V352H544.69V189.333H539.357ZM352.591 192H542.023V186.667H352.591V192ZM349.924 0V189.333H355.258V0H349.924Z"
          fill="#FF0000"
          mask="url(#path-1-inside-1_232:2073)"
        />
        <path
          d="M331.915 162.667L211.186 162.667"
          stroke="#FF0000"
          strokeWidth="2.66667"
        />
        <path
          d="M331.915 189.333L211.186 189.333"
          stroke="#FF0000"
          strokeWidth="2.66667"
        />
        <path
          d="M163.16 210.667V331.333"
          stroke="#FF0000"
          strokeWidth="2.66667"
        />
        <path
          d="M189.841 210.667V331.333"
          stroke="#FF0000"
          strokeWidth="2.66667"
        />
        <path
          d="M352.592 210.667V331.333"
          stroke="#FF0000"
          strokeWidth="2.66667"
        />
        <path
          d="M379.272 210.667V331.333"
          stroke="#FF0000"
          strokeWidth="2.66667"
        />
        <path
          d="M63.9395 264.146H68.5332V278.021H74.127C75.0436 268.271 78.9603 263.396 85.877 263.396C89.4603 263.396 92.3145 264.917 94.4395 267.958C96.5853 271 97.6582 275.219 97.6582 280.615C97.6582 286.281 96.5957 290.615 94.4707 293.615C92.3665 296.594 89.4707 298.083 85.7832 298.083C82.3249 298.083 79.5957 296.708 77.5957 293.958C75.6165 291.208 74.4603 287.438 74.127 282.646H68.5332V297.333H63.9395V264.146ZM85.9395 268.177C83.6478 268.177 81.877 269.24 80.627 271.365C79.3978 273.469 78.7832 276.427 78.7832 280.24C78.7832 284.76 79.4082 288.094 80.6582 290.24C81.9082 292.385 83.6061 293.458 85.752 293.458C87.7311 293.458 89.4186 292.531 90.8145 290.677C92.2311 288.823 92.9395 285.594 92.9395 280.99C92.9395 272.448 90.6061 268.177 85.9395 268.177Z"
          fill="#FF0000"
        />
        <path
          d="M247.696 264.146H269.821V268.802H261.071V297.333H256.446V268.802H247.696V264.146ZM274.04 310.115L273.54 304.833C274.561 305.167 275.436 305.333 276.165 305.333C277.144 305.333 277.946 305.135 278.571 304.74C279.217 304.344 279.748 303.729 280.165 302.896C280.311 302.604 280.915 300.771 281.977 297.396L271.634 264.146H276.602L282.29 283.365C282.998 285.76 283.654 288.323 284.259 291.052C284.779 288.469 285.404 285.948 286.134 283.49L291.946 264.146H296.571L286.227 297.896C284.873 302.271 283.8 305.188 283.009 306.646C282.238 308.125 281.352 309.188 280.352 309.833C279.373 310.479 278.259 310.802 277.009 310.802C276.134 310.802 275.144 310.573 274.04 310.115Z"
          fill="#FF0000"
        />
        <path
          d="M472.358 250.458H476.452C476.264 252.75 475.848 254.333 475.202 255.208C474.556 256.063 473.744 256.604 472.764 256.833C471.785 257.063 469.879 257.177 467.046 257.177C463.316 257.177 460.744 257.615 459.327 258.49C457.931 259.344 456.921 260.781 456.296 262.802C455.671 264.802 455.316 267.354 455.233 270.458C457.546 266.25 460.65 264.146 464.546 264.146C468.191 264.146 471.171 265.656 473.483 268.677C475.796 271.698 476.952 275.729 476.952 280.771C476.952 285.583 475.879 289.677 473.733 293.052C471.587 296.406 468.473 298.083 464.389 298.083C461.348 298.083 458.91 297.26 457.077 295.615C455.264 293.948 453.848 291.656 452.827 288.74C451.806 285.823 451.296 280.938 451.296 274.083C451.296 265.125 452.504 259.125 454.921 256.083C457.358 253.042 461.119 251.521 466.202 251.521C469.348 251.521 471.129 251.448 471.546 251.302C471.983 251.156 472.254 250.875 472.358 250.458ZM472.139 280.615C472.139 276.906 471.421 274.01 469.983 271.927C468.566 269.844 466.723 268.802 464.452 268.802C461.889 268.802 459.921 269.938 458.546 272.208C457.171 274.479 456.483 277.625 456.483 281.646C456.483 285.625 457.264 288.604 458.827 290.583C460.389 292.563 462.285 293.552 464.514 293.552C466.681 293.552 468.494 292.385 469.952 290.052C471.41 287.719 472.139 284.573 472.139 280.615Z"
          fill="#FF0000"
        />
      </svg>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// О НАС */}
      <Link style={{ cursor: "pointer" }} to="/about">
        <svg
          style={{ display: "block", zIndex: "-3", cursor: "pointer" }}
          width="543"
          height="352"
          viewBox="0 0 543 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_232:2105" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.703125 352L542.318 352L542.318 189.333L542.318 189.333L542.318 0L379.567 -1.42208e-05L379.567 189.333L0.703139 189.333L0.703125 352Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.703125 352L542.318 352L542.318 189.333L542.318 189.333L542.318 0L379.567 -1.42208e-05L379.567 189.333L0.703139 189.333L0.703125 352Z"
            fill="#D2D2D2"
          />
          <path
            d="M542.318 352L542.318 354.667L544.985 354.667L544.985 352L542.318 352ZM0.703125 352L-1.9635 352L-1.9635 354.667L0.703125 354.667L0.703125 352ZM542.318 189.333L544.985 189.333L544.985 186.667L542.318 186.667L542.318 189.333ZM542.318 189.333L539.652 189.333L539.652 192L542.318 192L542.318 189.333ZM542.318 0L544.985 2.32993e-07L544.985 -2.66666L542.318 -2.66666L542.318 0ZM379.567 -1.42208e-05L379.567 -2.66667L376.9 -2.66667L376.9 -1.44538e-05L379.567 -1.42208e-05ZM379.567 189.333L379.567 192L382.233 192L382.233 189.333L379.567 189.333ZM0.703139 189.333L0.703139 186.667L-1.96349 186.667L-1.96349 189.333L0.703139 189.333ZM542.318 349.333L0.703125 349.333L0.703125 354.667L542.318 354.667L542.318 349.333ZM539.652 189.333L539.652 352L544.985 352L544.985 189.333L539.652 189.333ZM542.318 192L542.318 192L542.318 186.667L542.318 186.667L542.318 192ZM539.652 -2.33019e-07L539.652 189.333L544.985 189.333L544.985 2.32993e-07L539.652 -2.33019e-07ZM379.567 2.66664L542.318 2.66666L542.318 -2.66666L379.567 -2.66667L379.567 2.66664ZM382.233 189.333L382.234 -1.39878e-05L376.9 -1.44538e-05L376.9 189.333L382.233 189.333ZM0.703139 192L379.567 192L379.567 186.667L0.703139 186.667L0.703139 192ZM3.36981 352L3.36983 189.333L-1.96349 189.333L-1.9635 352L3.36981 352Z"
            fill="white"
            mask="url(#path-1-inside-1_232:2105)"
          />
          <path
            d="M400.245 189.333L520.975 189.333"
            stroke="white"
            strokeWidth="2.66667"
          />
          <path
            d="M400.245 162.667L520.975 162.667"
            stroke="white"
            strokeWidth="2.66667"
          />
          <path
            d="M379.567 333.333L379.567 212.667"
            stroke="white"
            strokeWidth="2.66667"
          />
          <path
            d="M352.888 333.333L352.888 212.667"
            stroke="white"
            strokeWidth="2.66667"
          />
          <path
            d="M190.136 333.333L190.136 212.667"
            stroke="white"
            strokeWidth="2.66667"
          />
          <path
            d="M163.455 333.333L163.455 212.667"
            stroke="white"
            strokeWidth="2.66667"
          />
          <path
            d="M73.8112 276.74C73.8112 271.01 75.0092 266.688 77.405 263.771C79.8217 260.854 82.8737 259.396 86.5612 259.396C90.1862 259.396 93.2175 260.854 95.655 263.771C98.0925 266.688 99.3112 270.896 99.3112 276.396C99.3112 282.354 98.1133 286.792 95.7175 289.708C93.3217 292.625 90.2696 294.083 86.5612 294.083C82.9154 294.083 79.8737 292.625 77.4362 289.708C75.0196 286.771 73.8112 282.448 73.8112 276.74ZM78.53 276.74C78.53 281.031 79.3112 284.229 80.8737 286.333C82.4362 288.417 84.3737 289.458 86.6862 289.458C88.8529 289.458 90.7071 288.406 92.2487 286.302C93.8112 284.177 94.5925 280.99 94.5925 276.74C94.5925 272.469 93.8112 269.292 92.2487 267.208C90.6862 265.104 88.7487 264.052 86.4362 264.052C84.2487 264.052 82.3842 265.104 80.8425 267.208C79.3008 269.313 78.53 272.49 78.53 276.74Z"
            fill="white"
          />
          <path
            d="M429.531 257.479H434.125V271.292H446.937V257.479H451.531V290.667H446.937V275.948H434.125V290.667H429.531V257.479ZM476.187 286.573C474.646 288.177 473.041 289.385 471.375 290.198C469.708 291.01 467.979 291.417 466.187 291.417C463.354 291.417 461.093 290.562 459.406 288.854C457.718 287.146 456.875 284.844 456.875 281.948C456.875 280.031 457.271 278.333 458.062 276.854C458.854 275.375 459.937 274.219 461.312 273.385C462.687 272.552 464.771 271.937 467.562 271.542C471.312 271 474.062 270.354 475.812 269.604L475.843 268.167C475.843 265.896 475.437 264.302 474.625 263.385C473.479 262.052 471.718 261.385 469.343 261.385C467.198 261.385 465.593 261.833 464.531 262.729C463.468 263.604 462.687 265.26 462.187 267.698L457.656 266.948C458.302 263.385 459.604 260.792 461.562 259.167C463.541 257.542 466.364 256.729 470.031 256.729C472.885 256.729 475.125 257.271 476.75 258.354C478.375 259.417 479.396 260.74 479.812 262.323C480.25 263.906 480.468 266.219 480.468 269.26V276.76C480.468 282.01 480.562 285.323 480.75 286.698C480.958 288.052 481.354 289.375 481.937 290.667H477.125C476.646 289.521 476.333 288.156 476.187 286.573ZM475.812 274.01C474.125 274.844 471.614 275.552 468.281 276.135C466.343 276.469 464.989 276.854 464.218 277.292C463.448 277.708 462.843 278.312 462.406 279.104C461.989 279.875 461.781 280.771 461.781 281.792C461.781 283.375 462.271 284.646 463.25 285.604C464.229 286.542 465.583 287.01 467.312 287.01C468.958 287.01 470.448 286.583 471.781 285.729C473.135 284.875 474.146 283.74 474.812 282.323C475.479 280.885 475.812 278.802 475.812 276.073V274.01ZM505.468 278.51L510 279.229C509.479 283.187 508.166 286.208 506.062 288.292C503.979 290.375 501.468 291.417 498.531 291.417C494.968 291.417 492.031 289.958 489.718 287.042C487.427 284.104 486.281 279.771 486.281 274.042C486.281 268.271 487.437 263.948 489.75 261.073C492.083 258.177 495.073 256.729 498.718 256.729C501.531 256.729 503.896 257.604 505.812 259.354C507.75 261.104 508.989 263.729 509.531 267.229L505.062 268.073C504.625 265.823 503.864 264.146 502.781 263.042C501.698 261.917 500.396 261.354 498.875 261.354C496.604 261.354 494.718 262.365 493.218 264.385C491.739 266.385 491 269.573 491 273.948C491 278.469 491.708 281.74 493.125 283.76C494.562 285.781 496.396 286.792 498.625 286.792C500.375 286.792 501.864 286.125 503.093 284.792C504.343 283.437 505.135 281.344 505.468 278.51Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
}

export default FirstRow;
