"use client";

import React, { useCallback } from 'react'
import {categoryItems} from '@/app/lib/category'
import Link  from 'next/link'
import Image from 'next/image'
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

function IconCollect() {

  const searchparams = useSearchParams();
  const search = searchparams.get('filter');
  const pathname = usePathname();
  const createQueryString = useCallback(

    (name:string, value: string) => {
      const params = new URLSearchParams(searchparams.toString());

      params.set(name, value);

      return  params.toString();

    }, [searchparams]
    
  );

  return (
    <div className='flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar'>
      {categoryItems.map((item)=>(
        <Link key={item.id} href={pathname + "?" + createQueryString("filter", item.name)} className={cn(
          search === item.name ? "border-b-2 border-black pb-2 flex-shrink-0" 
            : "opacity-70 flex-shrink-0",
          "flex flex-col gap-y-3 items-center"
        )}>

          
            
            <div className='relative w-6 h-6'>
                <Image  src={item.imageUrl} className="w-6 h-6" alt="category picture" width={24} height={24}/>

            </div>
            <p className='text-xs font-medium'>{item.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default IconCollect
