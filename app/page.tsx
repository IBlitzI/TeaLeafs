import SearchBar from '@/components/SearchBar';
import RecipeList from '@/components/RecipeList';
import ThreeScene from '@/components/ThreeScene';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <ThreeScene />
          </div>
          <h1 className="text-4xl font-bold mb-4">Doğal Şifa</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Modern sağlık için geleneksel şifa reçeteleri
          </p>
          <SearchBar />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <RecipeList />
          </div>
          
          {/* Reklam Alanı */}
          <aside className="lg:w-72 space-y-4">
            <Card className="p-4 sticky top-4">
              <div className="h-[600px] flex items-center justify-center bg-muted text-muted-foreground text-sm">
                Reklam Alanı
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}