import {createClient, type SupabaseClient} from '@supabase/supabase-js';
export type Config = {supabaseUrl:string; supabaseKey:string; chat:boolean; checkout:boolean; model:string; offline?:boolean};
let client:SupabaseClient|null=null;
export function getAuth(c:Config){
 if(!c.supabaseUrl||!c.supabaseKey)return null;
 if(!client)client=createClient(c.supabaseUrl,c.supabaseKey,{auth:{flowType:'pkce',detectSessionInUrl:false}});
 return client;
}
export const blankConfig:Config={supabaseUrl:'',supabaseKey:'',chat:false,checkout:false,model:'OpenAI'};
export async function api(path:string,config:Config,body?:unknown,method?:string){
 if(config.offline)throw new Error('OFFLINE');
 const auth=getAuth(config); const session=auth?(await auth.auth.getSession()).data.session:null;
 const r=await fetch('/api/'+path,{method:method||(body?'POST':'GET'),headers:{'Content-Type':'application/json',...(session?{Authorization:'Bearer '+session.access_token}:{})},...(body?{body:JSON.stringify(body)}:{})});
 const result=await r.json(); if(!r.ok)throw new Error(result.error||'ERROR');return result;
}
