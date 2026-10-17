
import React, { useState } from 'react';
import { Gift, User } from '../types';
import { IconHeart, IconSparkles, IconCheck, IconUser, IconSearch } from './Icons';

interface PresenceListProps {
  gifts: Gift[];
  currentUser?: User | null;
  isPast?: boolean; // Novo prop para controle de texto
}

const PresenceList: React.FC<PresenceListProps> = ({ gifts, currentUser, isPast = false }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mapeamento de presentes por pessoa
  const giversMap: { [key: string]: number } = {};
  gifts.forEach(g => {
    if (g.status === 'reserved' && g.reservedBy) {
      giversMap[g.reservedBy] = (giversMap[g.reservedBy] || 0) + 1;
    }
  });

  const giverNames: string[] = Object.keys(giversMap);
  const confirmedCount = gifts.filter(g => g.status === 'reserved').length;
  const uniqueGivers = giverNames.length;
  
  // Filtra nomes com base na busca
  const filteredGiverNames = giverNames.filter(name => 
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Verifica se eu já estou na lista
  const amIInList = currentUser && giverNames.some(name => name.toLowerCase() === currentUser.name.toLowerCase());

  if (confirmedCount === 0 && !currentUser) return null;

  return (
    <div className="bg-white/70 backdrop-blur-md border border-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 mb-10 md:mb-20 shadow-xl shadow-stone-200/50 animate-in fade-in slide-in-from-bottom-8 duration-1000 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#B07D62]/5 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-8 md:mb-10">
        <div className="text-center md:text-left relative">
          <div className="absolute -top-10 -left-6 opacity-10 hidden md:block">
            <IconHeart className="w-20 h-20 text-[#B07D62]" />
          </div>
          <h3 className="text-2xl md:text-4xl font-cursive text-[#354F52] flex items-center justify-center md:justify-start gap-3">
            <IconHeart className="w-6 h-6 md:hidden text-[#B07D62]" />
            Mural de Carinho
          </h3>
          <p className="text-[10px] text-[#84A98C] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mt-2 md:mt-3">
            {isPast ? "Quem participou desse sonho e deixou nossa casa cheia de amor" : "Quem já está participando com a gente"}
          </p>
        </div>
        
        <div className="flex gap-3 md:gap-4 w-full md:w-auto justify-center">
          <div className="flex flex-col items-center bg-[#B07D62]/5 px-4 md:px-6 py-3 md:py-4 rounded-2xl border border-[#B07D62]/10 flex-1 md:flex-none min-w-[100px]">
            <span className="text-2xl md:text-3xl font-bold text-[#B07D62]">{confirmedCount}</span>
            <span className="text-[8px] md:text-[9px] font-black text-[#B07D62]/60 uppercase tracking-widest text-center">Presentes<br/>Ganhos</span>
          </div>
          <div className="flex flex-col items-center bg-[#52796F]/5 px-4 md:px-6 py-3 md:py-4 rounded-2xl border border-[#52796F]/10 flex-1 md:flex-none min-w-[100px]">
             <div className="flex items-center gap-1">
               <span className="text-2xl md:text-3xl font-bold text-[#52796F]">{uniqueGivers}</span>
             </div>
             <span className="text-[8px] md:text-[9px] font-black text-[#52796F]/60 uppercase tracking-widest text-center">Pessoas<br/>Especiais</span>
          </div>
        </div>
      </div>

      {/* Busca rápida quando a lista tem mais de 4 pessoas */}
      {giverNames.length > 4 && (
        <div className="mb-6 max-w-sm mx-auto md:mx-0">
          <div className="relative">
            <IconSearch className="w-4 h-4 text-[#84A98C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar seu nome ou de um amigo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white/80 border border-[#52796F]/20 rounded-full focus:outline-none focus:border-[#B07D62] text-[#354F52] placeholder-[#84A98C]/60 transition-colors"
            />
          </div>
        </div>
      )}
      
      {/* Lista de Nomes (Chips) */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 items-center min-h-[50px]">
        {filteredGiverNames.length > 0 ? (
          filteredGiverNames.map((name, index) => {
            const isMe = currentUser && name.toLowerCase() === currentUser.name.toLowerCase();
            const giftCount = giversMap[name] || 1;
            
            return (
              <div 
                key={index} 
                className={`
                  group flex items-center gap-2 pl-1 pr-4 py-1.5 rounded-full shadow-sm
                  transition-all duration-300 text-left
                  ${isMe 
                    ? 'bg-[#FDFCF8] border-2 border-[#B07D62] scale-105 shadow-md z-10' 
                    : 'bg-white border border-[#52796F]/10 hover:shadow-md hover:border-[#B07D62]/30'
                  }
                `}
              >
                <div className={`
                  w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold uppercase shadow-inner
                  ${isMe ? 'bg-[#B07D62] text-white' : 'bg-gradient-to-br from-[#52796F] to-[#354F52] text-white'}
                `}>
                  {isMe ? <IconCheck className="w-3 h-3 md:w-4 md:h-4" /> : name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className={`text-[11px] md:text-sm font-medium capitalize ${isMe ? 'text-[#B07D62] font-bold' : 'text-[#354F52]'}`}>
                    {name.split(' ')[0]} {isMe && '(Você)'}
                  </span>
                  {giftCount > 1 && (
                    <span className="text-[8px] text-[#B07D62] font-black uppercase tracking-wider">
                      {giftCount} mimos ❤️
                    </span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-xs text-[#84A98C] italic">Nenhum nome encontrado para "{searchTerm}".</p>
        )}

        {/* --- GAMIFICAÇÃO SUTIL / CONVITE LIGEIRO SE AINDA NÃO ESTIVER NA LISTA --- */}
        {!amIInList && isPast && (
          <div className="animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
             <div className="
               group relative flex items-center gap-3 pl-1 pr-5 py-1.5 
               border border-dashed border-[#B07D62]/40 rounded-full 
               hover:bg-[#B07D62]/5 transition-all cursor-default opacity-80 hover:opacity-100
             ">
                <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#B07D62]/10 flex items-center justify-center">
                   <IconUser className="w-3 h-3 md:w-4 md:h-4 text-[#B07D62]" />
                </div>
                <div className="flex flex-col">
                   <span className="text-[9px] font-black uppercase tracking-widest text-[#B07D62] leading-none mb-0.5">Ainda dá tempo</span>
                   <span className="text-[10px] md:text-xs font-serif italic text-[#354F52]">Garanta um presente tardio &hearts;</span>
                </div>
             </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center md:text-left pt-6 border-t border-dashed border-[#52796F]/10">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 px-4 py-2 rounded-full">
           <IconSparkles className="w-4 h-4 text-amber-500" />
           <p className="text-[10px] text-amber-800 font-bold uppercase tracking-widest">
             {amIInList 
               ? "Seu carinho ficou gravado na nossa casa para sempre! ❤️" 
               : "A cada amigo que contribuiu, nossa casa ganhou mais vida e aconchego."}
           </p>
        </div>
      </div>
    </div>
  );
};

export default PresenceList;
