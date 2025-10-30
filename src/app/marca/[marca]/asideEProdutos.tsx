'use client';

import CardProduto from '@/components/cardProduto';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { H1 } from '@/components/ui/h1';
import { Label } from '@/components/ui/label';
import { P } from '@/components/ui/p';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { TProduto } from '@/utils/getProdutos';
import { FilterIcon } from 'lucide-react';
import { useState } from 'react';

interface Props {
  categorias: string[];
  marca: string;
  produtos: TProduto[];
}

function AsideEProdutos({
  categorias,
  marca,
  produtos,
}: Props): React.ReactNode {
  const [selectedCategorias, setSelectedCategorias] = useState<string>('');

  const produtosFiltrados = selectedCategorias
    ? produtos.filter((produto) =>
        produto.categoria.toLowerCase().includes(selectedCategorias)
      )
    : produtos;

  return (
    <section className='mx-auto max-w-[120rem] px-6 py-6 md:pl-0 md:pr-6 md:py-12'>
      <div className='flex'>
        <aside className='px-8 min-w-64 space-y-6 sticky top-6 h-fit hidden md:block'>
          <div className='space-y-3 '>
            <P className='font-semibold'>Categoria:</P>
            <ul className='space-y-4'>
              <li className='flex items-center gap-2'>
                <Checkbox
                  id='todas'
                  checked={selectedCategorias === ''}
                  onCheckedChange={() => setSelectedCategorias('')}
                />
                <Label className='uppercase' htmlFor='todas'>
                  Todas
                </Label>
              </li>
              {categorias.map((categoria) => (
                <li key={categoria} className='flex items-center gap-2'>
                  <Checkbox
                    id={categoria}
                    checked={selectedCategorias === categoria}
                    onCheckedChange={() =>
                      setSelectedCategorias((prev) =>
                        prev === categoria ? '' : categoria
                      )
                    }
                  />
                  <Label className='uppercase' htmlFor={categoria}>
                    {categoria}
                  </Label>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className='w-full space-y-3'>
          <H1 className='capitalize p-4 bg-secondary w-fit rounded-lg'>
            {marca}
          </H1>
          <div className='flex justify-end'>
            <Sheet>
              <SheetTrigger asChild>
                <Button className='md:hidden' variant='outline' size={'sm'}>
                  <FilterIcon /> Filtros
                </Button>
              </SheetTrigger>
              <SheetContent className='w-fit pr-10 overflow-auto' side='left'>
                <SheetHeader>
                  <SheetTitle hidden>Filtros</SheetTitle>
                  <SheetDescription asChild>
                    <div className='space-y-3 '>
                      <P className='font-semibold'>Categoria:</P>
                      <ul className='space-y-4'>
                        <li className='flex items-center gap-2'>
                          <Checkbox
                            id='todasCelular'
                            checked={selectedCategorias === ''}
                            onCheckedChange={() => setSelectedCategorias('')}
                          />
                          <Label className='uppercase' htmlFor='todasCelular'>
                            Todas
                          </Label>
                        </li>
                        {categorias.map((categoria) => (
                          <li
                            key={categoria + 'Celular'}
                            className='flex items-center gap-2'
                          >
                            <Checkbox
                              id={categoria + 'Celular'}
                              checked={selectedCategorias === categoria}
                              onCheckedChange={() =>
                                setSelectedCategorias((prev) =>
                                  prev === categoria ? '' : categoria
                                )
                              }
                            />
                            <Label
                              className='uppercase'
                              htmlFor={categoria + 'Celular'}
                            >
                              {categoria}
                            </Label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className='grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {produtosFiltrados.map((produto) => (
              <CardProduto produto={produto} key={produto.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AsideEProdutos;
