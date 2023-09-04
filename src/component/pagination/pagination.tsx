'use client';
import React from "react";
import { Pagination, PaginationItemRenderProps, PaginationItemType, cn } from "@nextui-org/react";
import { ChevronIcon } from "./ChevronIcon";

export default function PaginationCommon() {
    const renderItem = ({
        ref,
        value,
        isActive,
        onNext,
        onPrevious,
        setPage,
        className,
    }: PaginationItemRenderProps) => {
        if (value === PaginationItemType.NEXT) {
            return (
                <button className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={onNext}>
                    <ChevronIcon className="rotate-180" />
                </button>
            );
        }

        if (value === PaginationItemType.PREV) {
            return (
                <button className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={onPrevious}>
                    <ChevronIcon />
                </button>
            );
        }

        if (value === PaginationItemType.DOTS) {
            return <button className={className}>...</button>;
        }

        // cursor is the default item
        return (
            <button
                ref={ref}
                className={cn(
                    className,
                    isActive &&
                    "text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold",
                )}
                onClick={() => setPage(value)}
            >
                {value}
            </button>
        );
    };

    return (
        <Pagination
            disableCursorAnimation
            showControls
            total={10}
            initialPage={1}
            className="gap-2 flex justify-center max-w-full"
            radius="full"
            renderItem={renderItem}
            variant="light"
        />
    );
}
