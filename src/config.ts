import { AnimistaTypes } from "react-animista";

const categories: any = {
  SCALE_UP: [
    AnimistaTypes.SCALE_UP_BL,
    AnimistaTypes.SCALE_UP_BOTTOM,
    AnimistaTypes.SCALE_UP_BR,
    AnimistaTypes.SCALE_UP_CENTER,
    AnimistaTypes.SCALE_UP_HOR_CENTER,
    AnimistaTypes.SCALE_UP_HOR_LEFT,
    AnimistaTypes.SCALE_UP_HOR_RIGHT,
    AnimistaTypes.SCALE_UP_LEFT,
    AnimistaTypes.SCALE_UP_RIGHT,
    AnimistaTypes.SCALE_UP_TL,
    AnimistaTypes.SCALE_UP_TOP,
    AnimistaTypes.SCALE_UP_TR,
    AnimistaTypes.SCALE_UP_VER_BOTTOM,
    AnimistaTypes.SCALE_UP_VER_CENTER,
    AnimistaTypes.SCALE_UP_VER_TOP
  ],
  SCALE_DOWN: [
    AnimistaTypes.SCALE_DOWN_BL,
    AnimistaTypes.SCALE_DOWN_BOTTOM,
    AnimistaTypes.SCALE_DOWN_BR,
    AnimistaTypes.SCALE_DOWN_CENTER,
    AnimistaTypes.SCALE_DOWN_HOR_CENTER,
    AnimistaTypes.SCALE_DOWN_HOR_LEFT,
    AnimistaTypes.SCALE_DOWN_HOR_RIGHT,
    AnimistaTypes.SCALE_DOWN_LEFT,
    AnimistaTypes.SCALE_DOWN_RIGHT,
    AnimistaTypes.SCALE_DOWN_TL,
    AnimistaTypes.SCALE_DOWN_TOP,
    AnimistaTypes.SCALE_DOWN_TR,
    AnimistaTypes.SCALE_DOWN_VER_BOTTOM,
    AnimistaTypes.SCALE_DOWN_VER_CENTER,
    AnimistaTypes.SCALE_DOWN_VER_TOP
  ],
  ROTATE: [
    AnimistaTypes.ROTATE_BL,
    AnimistaTypes.ROTATE_BOTTOM,
    AnimistaTypes.ROTATE_BR,
    AnimistaTypes.ROTATE_CENTER,
    AnimistaTypes.ROTATE_DIAGONAL_1,
    AnimistaTypes.ROTATE_DIAGONAL_2,
    AnimistaTypes.ROTATE_DIAGONAL_BL,
    AnimistaTypes.ROTATE_DIAGONAL_BR,
    AnimistaTypes.ROTATE_DIAGONAL_TL,
    AnimistaTypes.ROTATE_DIAGONAL_TR,
    AnimistaTypes.ROTATE_HOR_BOTTOM,
    AnimistaTypes.ROTATE_HOR_CENTER,
    AnimistaTypes.ROTATE_HOR_TOP,
    AnimistaTypes.ROTATE_LEFT,
    AnimistaTypes.ROTATE_RIGHT,
    AnimistaTypes.ROTATE_TL,
    AnimistaTypes.ROTATE_TOP,
    AnimistaTypes.ROTATE_TR,
    AnimistaTypes.ROTATE_VERT_CENTER,
    AnimistaTypes.ROTATE_VERT_LEFT,
    AnimistaTypes.ROTATE_VERT_RIGHT
  ],
  ROTATE_SCALE: [
    AnimistaTypes.ROTATE_SCALE_DOWN,
    AnimistaTypes.ROTATE_SCALE_DOWN_DIAG_1,
    AnimistaTypes.ROTATE_SCALE_DOWN_DIAG_2,
    AnimistaTypes.ROTATE_SCALE_DOWN_HOR,
    AnimistaTypes.ROTATE_SCALE_DOWN_VER,
    AnimistaTypes.ROTATE_SCALE_UP,
    AnimistaTypes.ROTATE_SCALE_UP_DIAG_1,
    AnimistaTypes.ROTATE_SCALE_UP_DIAG_2,
    AnimistaTypes.ROTATE_SCALE_UP_HOR,
    AnimistaTypes.ROTATE_SCALE_UP_VER
  ],
  ROTATE_90: [
    AnimistaTypes.ROTATE_90_BL_CCW,
    AnimistaTypes.ROTATE_90_BL_CW,
    AnimistaTypes.ROTATE_90_BOTTOM_CCW,
    AnimistaTypes.ROTATE_90_BOTTOM_CW,
    AnimistaTypes.ROTATE_90_BR_CCW,
    AnimistaTypes.ROTATE_90_BR_CW,
    AnimistaTypes.ROTATE_90_CCW,
    AnimistaTypes.ROTATE_90_CW,
    AnimistaTypes.ROTATE_90_HORIZONTAL_BCK,
    AnimistaTypes.ROTATE_90_HORIZONTAL_FWD,
    AnimistaTypes.ROTATE_90_LEFT_CCW,
    AnimistaTypes.ROTATE_90_LEFT_CW,
    AnimistaTypes.ROTATE_90_RIGHT_CCW,
    AnimistaTypes.ROTATE_90_RIGHT_CW,
    AnimistaTypes.ROTATE_90_TL_CCW,
    AnimistaTypes.ROTATE_90_TL_CW,
    AnimistaTypes.ROTATE_90_TOP_CCW,
    AnimistaTypes.ROTATE_90_TOP_CW,
    AnimistaTypes.ROTATE_90_TR_CCW,
    AnimistaTypes.ROTATE_90_TR_CW,
    AnimistaTypes.ROTATE_90_VERTICAL_BCK,
    AnimistaTypes.ROTATE_90_VERTICAL_FWD
  ],
  FLIP: [
    AnimistaTypes.FLIP_DIAGONAL_1_BCK,
    AnimistaTypes.FLIP_DIAGONAL_1_BL,
    AnimistaTypes.FLIP_DIAGONAL_1_FWD,
    AnimistaTypes.FLIP_DIAGONAL_1_TR,
    AnimistaTypes.FLIP_DIAGONAL_2_BCK,
    AnimistaTypes.FLIP_DIAGONAL_2_BR,
    AnimistaTypes.FLIP_DIAGONAL_2_FWD,
    AnimistaTypes.FLIP_DIAGONAL_2_TL,
    AnimistaTypes.FLIP_HORIZONTAL_BCK,
    AnimistaTypes.FLIP_HORIZONTAL_BOTTOM,
    AnimistaTypes.FLIP_HORIZONTAL_FWD,
    AnimistaTypes.FLIP_HORIZONTAL_TOP,
    AnimistaTypes.FLIP_VERTICAL_BCK,
    AnimistaTypes.FLIP_VERTICAL_FWD,
    AnimistaTypes.FLIP_VERTICAL_LEFT,
    AnimistaTypes.FLIP_VERTICAL_RIGHT
  ],
  FLIP_2: [
    AnimistaTypes.FLIP_2_HOR_BOTTOM_1,
    AnimistaTypes.FLIP_2_HOR_BOTTOM_2,
    AnimistaTypes.FLIP_2_HOR_BOTTOM_BCK,
    AnimistaTypes.FLIP_2_HOR_BOTTOM_FWD,
    AnimistaTypes.FLIP_2_HOR_TOP_1,
    AnimistaTypes.FLIP_2_HOR_TOP_2,
    AnimistaTypes.FLIP_2_HOR_TOP_BCK,
    AnimistaTypes.FLIP_2_HOR_TOP_FWD,
    AnimistaTypes.FLIP_2_VER_LEFT_1,
    AnimistaTypes.FLIP_2_VER_LEFT_2,
    AnimistaTypes.FLIP_2_VER_LEFT_BCK,
    AnimistaTypes.FLIP_2_VER_LEFT_FWD,
    AnimistaTypes.FLIP_2_VER_RIGHT_1,
    AnimistaTypes.FLIP_2_VER_RIGHT_2,
    AnimistaTypes.FLIP_2_VER_RIGHT_BCK,
    AnimistaTypes.FLIP_2_VER_RIGHT_FWD
  ],
  FLIP_SCALE: [
    AnimistaTypes.FLIP_SCALE_DOWN_DIAG_1,
    AnimistaTypes.FLIP_SCALE_DOWN_DIAG_2,
    AnimistaTypes.FLIP_SCALE_DOWN_HOR,
    AnimistaTypes.FLIP_SCALE_DOWN_VER,
    AnimistaTypes.FLIP_SCALE_UP_DIAG_1,
    AnimistaTypes.FLIP_SCALE_UP_DIAG_2,
    AnimistaTypes.FLIP_SCALE_UP_HOR,
    AnimistaTypes.FLIP_SCALE_UP_VER
  ],
  FLIP_SCALE_2: [
    AnimistaTypes.FLIP_SCALE_2_HOR_BOTTOM,
    AnimistaTypes.FLIP_SCALE_2_HOR_TOP,
    AnimistaTypes.FLIP_SCALE_2_VER_LEFT,
    AnimistaTypes.FLIP_SCALE_2_VER_RIGHT
  ],
  SWING: [
    AnimistaTypes.SWING_BOTTOM_BCK,
    AnimistaTypes.SWING_BOTTOM_FWD,
    AnimistaTypes.SWING_BOTTOM_LEFT_BCK,
    AnimistaTypes.SWING_BOTTOM_LEFT_FWD,
    AnimistaTypes.SWING_BOTTOM_RIGHT_BCK,
    AnimistaTypes.SWING_BOTTOM_RIGHT_FWD,
    AnimistaTypes.SWING_LEFT_BCK,
    AnimistaTypes.SWING_LEFT_FWD,
    AnimistaTypes.SWING_RIGHT_BCK,
    AnimistaTypes.SWING_RIGHT_FWD,
    AnimistaTypes.SWING_TOP_BCK,
    AnimistaTypes.SWING_TOP_FWD,
    AnimistaTypes.SWING_TOP_LEFT_BCK,
    AnimistaTypes.SWING_TOP_LEFT_FWD,
    AnimistaTypes.SWING_TOP_RIGHT_BCK,
    AnimistaTypes.SWING_TOP_RIGHT_FWD
  ],
  SLIDE: [
    AnimistaTypes.SLIDE_BL,
    AnimistaTypes.SLIDE_BOTTOM,
    AnimistaTypes.SLIDE_BR,
    AnimistaTypes.SLIDE_LEFT,
    AnimistaTypes.SLIDE_RIGHT,
    AnimistaTypes.SLIDE_TL,
    AnimistaTypes.SLIDE_TOP,
    AnimistaTypes.SLIDE_TR
  ],
  SLIDE_BCK: [
    AnimistaTypes.SLIDE_BCK_BL,
    AnimistaTypes.SLIDE_BCK_BOTTOM,
    AnimistaTypes.SLIDE_BCK_BR,
    AnimistaTypes.SLIDE_BCK_CENTER,
    AnimistaTypes.SLIDE_BCK_LEFT,
    AnimistaTypes.SLIDE_BCK_RIGHT,
    AnimistaTypes.SLIDE_BCK_TL,
    AnimistaTypes.SLIDE_BCK_TOP,
    AnimistaTypes.SLIDE_BCK_TR
  ],
  SLIDE_FWD: [
    AnimistaTypes.SLIDE_FWD_BL,
    AnimistaTypes.SLIDE_FWD_BOTTOM,
    AnimistaTypes.SLIDE_FWD_BR,
    AnimistaTypes.SLIDE_FWD_CENTER,
    AnimistaTypes.SLIDE_FWD_LEFT,
    AnimistaTypes.SLIDE_FWD_RIGHT,
    AnimistaTypes.SLIDE_FWD_TL,
    AnimistaTypes.SLIDE_FWD_TOP,
    AnimistaTypes.SLIDE_FWD_TR
  ],
  SLIDE_ROTATE: [
    AnimistaTypes.SLIDE_ROTATE_HOR_B_BCK,
    AnimistaTypes.SLIDE_ROTATE_HOR_B_FWD,
    AnimistaTypes.SLIDE_ROTATE_HOR_BOTTOM,
    AnimistaTypes.SLIDE_ROTATE_HOR_T_BCK,
    AnimistaTypes.SLIDE_ROTATE_HOR_T_FWD,
    AnimistaTypes.SLIDE_ROTATE_HOR_TOP,
    AnimistaTypes.SLIDE_ROTATE_VER_L_BCK,
    AnimistaTypes.SLIDE_ROTATE_VER_L_FWD,
    AnimistaTypes.SLIDE_ROTATE_VER_LEFT,
    AnimistaTypes.SLIDE_ROTATE_VER_R_BCK,
    AnimistaTypes.SLIDE_ROTATE_VER_R_FWD,
    AnimistaTypes.SLIDE_ROTATE_VER_RIGHT
  ],
  SHADOW_DROP: [
    AnimistaTypes.SHADOW_DROP_BL,
    AnimistaTypes.SHADOW_DROP_BOTTOM,
    AnimistaTypes.SHADOW_DROP_BR,
    AnimistaTypes.SHADOW_DROP_CENTER,
    AnimistaTypes.SHADOW_DROP_LEFT,
    AnimistaTypes.SHADOW_DROP_LR,
    AnimistaTypes.SHADOW_DROP_RIGHT,
    AnimistaTypes.SHADOW_DROP_TB,
    AnimistaTypes.SHADOW_DROP_TL,
    AnimistaTypes.SHADOW_DROP_TOP,
    AnimistaTypes.SHADOW_DROP_TR
  ],
  SHADOW_DROP_2: [
    AnimistaTypes.SHADOW_DROP_2_BL,
    AnimistaTypes.SHADOW_DROP_2_BOTTOM,
    AnimistaTypes.SHADOW_DROP_2_BR,
    AnimistaTypes.SHADOW_DROP_2_CENTER,
    AnimistaTypes.SHADOW_DROP_2_LEFT,
    AnimistaTypes.SHADOW_DROP_2_LR,
    AnimistaTypes.SHADOW_DROP_2_RIGHT,
    AnimistaTypes.SHADOW_DROP_2_TB,
    AnimistaTypes.SHADOW_DROP_2_TL,
    AnimistaTypes.SHADOW_DROP_2_TOP,
    AnimistaTypes.SHADOW_DROP_2_TR
  ],
  SHADOW_POP: [
    AnimistaTypes.SHADOW_POP_BL,
    AnimistaTypes.SHADOW_POP_BR,
    AnimistaTypes.SHADOW_POP_TL,
    AnimistaTypes.SHADOW_POP_TR
  ],
  SHADOW_INSET: [
    AnimistaTypes.SHADOW_INSET_BL,
    AnimistaTypes.SHADOW_INSET_BOTTOM,
    AnimistaTypes.SHADOW_INSET_BR,
    AnimistaTypes.SHADOW_INSET_CENTER,
    AnimistaTypes.SHADOW_INSET_LEFT,
    AnimistaTypes.SHADOW_INSET_LR,
    AnimistaTypes.SHADOW_INSET_RIGHT,
    AnimistaTypes.SHADOW_INSET_TB,
    AnimistaTypes.SHADOW_INSET_TL,
    AnimistaTypes.SHADOW_INSET_TOP,
    AnimistaTypes.SHADOW_INSET_TR
  ]
};

export default categories;
