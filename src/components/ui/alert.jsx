import * as React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Alert = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "relative w-full rounded-lg border border-[#E5E5E5] bg-background px-4 py-3 text-sm text-foreground",
        className
      )}
      {...props}
    />
  );
});

Alert.displayName = "Alert";

const AlertDescription = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "text-sm [&_p]:leading-relaxed",
          className
        )}
        {...props}
      />
    );
  }
);

AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription };