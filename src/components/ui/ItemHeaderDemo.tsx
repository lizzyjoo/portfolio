import Image from "next/image";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

const models = [
  {
    name: "Griffith Lab @Brandeis University",
    description: "Dopaminergic neurons & learning circuits",
    image: "/images/brandeis.png",
  },
  {
    name: "Mina Lab @Harvard University",
    description: "COVID-19 antibody testing",
    image: "/images/harvard.png",
  },
  {
    name: "Feng Lab @MIT",
    description: "Gene therapy & CRISPR in mouse models",
    image: "/images/mit.jpg",
  },
  {
    name: "Reinhart Lab @Boston University",
    description: "Human brain stimulation & perception",
    image: "/images/bostonu.png",
  },
];

export function ItemHeaderDemo() {
  return (
    <div className="flex w-full max-w-xxl gap-6 justify-center">
      <ItemGroup className="grid grid-cols-1 lg:grid-cols-4 gap-8 gsap-fade-up">
        {models.map((model) => (
          <Item key={model.name} variant="outline">
            <ItemHeader>
              <Image
                src={model.image}
                alt={model.name}
                width={100}
                height={100}
                unoptimized
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription>{model.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
