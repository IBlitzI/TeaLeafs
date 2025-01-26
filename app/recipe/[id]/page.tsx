import { Recipe } from '@/types/recipe';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Heart, Leaf } from 'lucide-react';
import { mockRecipes } from '@/lib/mock-data';
import Link from 'next/link';
import Image from 'next/image';

export function generateStaticParams() {
  return mockRecipes.map((recipe) => ({
    id: recipe.id.toString(),
  }));
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = mockRecipes.find((r) => r.id === parseInt(params.id));

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Tarif bulunamadı...</h1>
        <Link href="/">
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ana Sayfaya Dön
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tariflere Dön
        </Button>
      </Link>

      <div className="max-w-3xl mx-auto">
        {recipe.image && (
          <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mb-6">{recipe.name}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {recipe.ailments.map((ailment) => (
            <Badge key={ailment} variant="secondary" className="bg-primary/10 text-primary">
              {ailment}
            </Badge>
          ))}
        </div>

        <p className="text-lg text-muted-foreground mb-8">
          {recipe.description}
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Leaf className="mr-2 h-5 w-5 text-primary" />
                Malzemeler
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Hazırlanışı</h2>
              <ol className="list-decimal pl-5 space-y-2">
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Heart className="mr-2 h-5 w-5 text-primary" />
              Faydaları
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {recipe.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}