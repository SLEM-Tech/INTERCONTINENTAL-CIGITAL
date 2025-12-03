"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { FormatMoney2 } from "../Reusables/FormatMoney";
import Picture from "../picture/Picture";
import Link from "next/link";
import { convertToSlug } from "@constants";
import { BsCartPlus } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

interface ProductCard2Props {
	id: string | number;
	image: string;
	oldAmount?: string;
	newAmount: string;
	description: string;
	className?: string;
	showWishlist?: boolean;
}

const ProductCard2 = ({
	id,
	image,
	oldAmount,
	newAmount,
	description,
	className = "",
	showWishlist = true,
}: ProductCard2Props) => {
	const router = useRouter();
	const { addItem, removeItem, updateItem, getItem } = useCart();
	const [isHovered, setIsHovered] = useState(false);
	const ID = id.toString();
	const cartItem = getItem(ID);
	const cartItemCount = cartItem?.quantity || 0;
	const NewAmount = parseInt(newAmount);
	const OldAmount = oldAmount ? parseInt(oldAmount) : null;
	const slugDesc = convertToSlug(description);

	const handleAddToCart = (e: React.MouseEvent) => {
		e.stopPropagation();
		addItem({
			id: ID,
			name: description,
			price: NewAmount,
			quantity: 1,
			image: image,
		});
	};

	const updateQuantity = (newQuantity: number) => {
		if (newQuantity <= 0) {
			removeItem(ID);
		} else {
			updateItem(ID, { quantity: newQuantity });
		}
	};

	return (
    <div
      className={`group relative flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image with Wishlist */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Link
          href={`/home-item/product/${slugDesc}-${id}`}
          className="block h-full"
        >
          <Picture
            src={image}
            alt={description}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
        </Link>

        {/* Sale Badge */}
        {OldAmount && OldAmount > NewAmount && (
          <div className="absolute top-3 left-3 bg-primaryColor-100 text-white text-xs font-medium px-2 py-1 rounded-sm">
            Sale
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/home-item/product/${slugDesc}-${id}`}>
          <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 hover:text-primary transition-colors">
            {description}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-semibold text-gray-900">
            <FormatMoney2 value={NewAmount} />
          </span>
          {OldAmount && OldAmount > NewAmount && (
            <span className="text-sm text-gray-500 line-through">
              <FormatMoney2 value={OldAmount} />
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <div className="flex justify-between items-center">
          {cartItemCount > 0 ? (
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateQuantity(cartItemCount - 1);
                }}
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Decrease quantity"
              >
                <AiOutlineMinus size={16} />
              </button>
              <span className="text-sm font-medium">{cartItemCount}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateQuantity(cartItemCount + 1);
                }}
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Increase quantity"
              >
                <AiOutlinePlus size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <BsCartPlus size={16} />
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
