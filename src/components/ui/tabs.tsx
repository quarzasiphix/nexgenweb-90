
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const isMobile = useIsMobile()
  
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "w-full flex rounded-lg bg-transparent",
        isMobile ? "gap-0 p-0 overflow-hidden" : "overflow-x-auto overflow-y-hidden scrollbar-none",
        className
      )}
      {...props}
    />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const isMobile = useIsMobile()
  
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        isMobile 
          ? "flex-1 px-4 py-3 text-white font-medium text-sm whitespace-nowrap transition-all data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white data-[state=inactive]:bg-[#252535]"
          : "flex-1 px-4 sm:px-6 py-3 rounded-lg text-white font-medium text-sm sm:text-base transition-all hover:bg-[#9b87f5]/20 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white data-[state=inactive]:bg-[#1b1b27]/50 whitespace-nowrap",
        className
      )}
      {...props}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
