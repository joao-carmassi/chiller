'use client';
import { Button } from '@/components/ui/button';
import { H3 } from '@/components/ui/h3';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import storeCarrinho from '@/store/carrinho';
import generateUrl from '@/utils/generateUrl';
import Image from 'next/image';
import Link from 'next/link';

export default function TableCarrinho() {
  const { carrinho, alterarQuantidade, removerDoCarrinho } = storeCarrinho();

  return (
    <div>
      {carrinho.length > 0 ? (
        <Table>
          <TableHeader className='bg-transparent w-full'>
            <TableRow className='hover:bg-transparent'>
              <TableHead className='w-2/3'>Produto</TableHead>
              <TableHead className='w-full hidden md:table-cell'>
                Quantidade
              </TableHead>
              <TableHead className='w-full'>Remover</TableHead>
            </TableRow>
          </TableHeader>
          <tbody aria-hidden='true' className='table-row h-2'></tbody>
          <TableBody className='[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg'>
            {carrinho.map((produto) => (
              <TableRow
                key={produto.item.id}
                className='odd:bg-muted/50 odd:hover:bg-muted/50 border-none hover:bg-transparent'
              >
                <TableCell className='py-2.5 md:py-3 font-medium space-y-3 md:space-y-0'>
                  <Link
                    href={`/produto/${generateUrl(
                      `${produto.item.nome}-${produto.item.sku}`
                    )}`}
                    className='group flex gap-3 items-center'
                  >
                    <Image
                      width={60}
                      height={60}
                      src='https://picsum.photos/200'
                      alt=''
                      className='h-14 w-14 object-cover object-center rounded-sm'
                    />
                    <div>
                      <p className='group-hover:underline'>
                        {produto.item.nome}
                      </p>
                      <p className='text-sm group-hover:underline text-muted-foreground font-normal'>
                        {produto.item.id.split(', ')}
                      </p>
                    </div>
                  </Link>
                  <div className='md:hidden flex gap-3 items-center'>
                    <p>Quantidade: </p>
                    <Select
                      value={String(produto.quantidade)}
                      onValueChange={(value) =>
                        alterarQuantidade(produto.item.id, value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Quantidade' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Quantidade</SelectLabel>
                          <SelectItem value='1'>1</SelectItem>
                          <SelectItem value='2'>2</SelectItem>
                          <SelectItem value='3'>3</SelectItem>
                          <SelectItem value='4'>4</SelectItem>
                          <SelectItem value='5'>5</SelectItem>
                          <SelectItem value='6'>6</SelectItem>
                          <SelectItem value='7'>7</SelectItem>
                          <SelectItem value='8'>8</SelectItem>
                          <SelectItem value='9'>9</SelectItem>
                          <SelectItem value='10'>10</SelectItem>
                          <SelectItem value='10+'>10+</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </TableCell>
                <TableCell className='py-2.5 md:py-3 hidden md:table-cell'>
                  <Select
                    value={String(produto.quantidade)}
                    onValueChange={(value) =>
                      alterarQuantidade(produto.item.id, value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Quantidade' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Quantidade</SelectLabel>
                        <SelectItem value='1'>1</SelectItem>
                        <SelectItem value='2'>2</SelectItem>
                        <SelectItem value='3'>3</SelectItem>
                        <SelectItem value='4'>4</SelectItem>
                        <SelectItem value='5'>5</SelectItem>
                        <SelectItem value='6'>6</SelectItem>
                        <SelectItem value='7'>7</SelectItem>
                        <SelectItem value='8'>8</SelectItem>
                        <SelectItem value='9'>9</SelectItem>
                        <SelectItem value='10'>10</SelectItem>
                        <SelectItem value='10+'>10+</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className='py-2.5 md:py-3'>
                  <Button
                    onClick={() => removerDoCarrinho(produto.item.id)}
                    variant={'link'}
                    size={'sm'}
                  >
                    Remover
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className='flex items-center flex-col gap-3 min-h-96 justify-center'>
          <H3 className='text-center'>Seu carrinho está vazio.</H3>
          <Button asChild>
            <Link href='/'>Ver mais produtos</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
