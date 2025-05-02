"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between border-b bg-background px-6 py-4">
      <div className="text-lg font-semibold">Dashboard</div>

      <div className="flex items-center gap-4">
        <Input
          type="text"
          placeholder="Search..."
          className="w-[200px] lg:w-[300px]"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="group relative">
              <Avatar className="cursor-pointer group-hover:opacity-80 transition">
                <AvatarImage src="/avatar.png" alt="User avatar" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
