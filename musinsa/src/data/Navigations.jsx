// 왼쪽 메뉴 데이터
import { ShoppingCart, UsersRound, Heart, Search } from "lucide-react";
export const NAV_LEFT = [
  { id: "musinsa", text: "MUSINSA" },
  { id: "beauty", text: "BEAUTY" },
  { id: "player", text: "PLAYER" },
  { id: "outlet", text: "OUTLET" },
  { id: "boutique", text: "BOUTIQUE" },
  { id: "shoes", text: "SHOES" },
  { id: "kids", text: "KIDS" },
  { id: "used", text: "USED" },
  { id: "snap", text: "SNAP" },
];

// 오른쪽 메뉴 데이터
export const NAV_RIGHT = [
  { id: "store", text: "오프라인 스토어" },
  { id: "search", text: "검색", icon: <Search size={18} /> },
  { id: "likes", text: "좋아요", icon: <Heart size={18} /> },
  { id: "my", text: "마이", icon: <UsersRound size={18} /> },
  { id: "cart", text: "장바구니", icon: <ShoppingCart size={18} /> },
];
