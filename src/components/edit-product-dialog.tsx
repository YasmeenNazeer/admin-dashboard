"use client";

import { useState } from "react";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICar } from "@/services/sanityApi";


interface EditProductDialogProps {
  product: ICar;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (product: ICar) => void;
  categoryDropdown: string[];
}

export function EditProductDialog({
  product: initialProduct,
  open,
  onOpenChange,
  onSave,
  categoryDropdown
}: EditProductDialogProps) {
  const [product, setProduct] = useState<ICar>(initialProduct);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onSave(product);
      onOpenChange(false);
    } catch (error) {
      console.error("Failed to update product", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Edit Car</DialogTitle>
          <DialogDescription>
            Make changes to your product here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex items-center gap-4">
            <div className="relative aspect-square w-40 overflow-hidden rounded-lg border">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <Button variant="outline" className="h-20 w-40">
              <ImagePlus className="mr-2 size-4" />
              Change Image
            </Button>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  value={product.pricePerDay}
                  onChange={(e) =>
                    setProduct({ ...product, pricePerDay:(e.target.value) })
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={product.category}
                  onValueChange={(value) =>
                    setProduct({ ...product, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryDropdown.map((category, index) => (
                      <SelectItem value={category} key={index}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="stock">Available</Label>
                <Input
                  id="stock"
                  type="number"
                  value={product.inventory}
                  onChange={(e) =>
                    setProduct({ ...product, inventory: Number(e.target.value) })
                  }
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Label({ children, ...props }: React.ComponentProps<"label">) {
  return (
    <label className="text-sm font-medium leading-none" {...props}>
      {children}
    </label>
  );
}
