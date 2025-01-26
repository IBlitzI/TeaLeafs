'use client';

import { Recipe } from '@/types/recipe';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-200 mb-6 overflow-hidden">
      {recipe.image && (
        <div className="relative w-full h-48">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{recipe.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.ailments.map((ailment) => (
            <Badge key={ailment} variant="secondary" className="bg-primary/10 text-primary">
              {ailment}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground mb-6">
          {recipe.description}
        </p>
        <div className="flex justify-end">
          <Link href={`/recipe/${recipe.id}`}>
            <Button>
              Devamını Oku
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}