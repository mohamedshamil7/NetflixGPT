import OpenAI from 'openai';
import { openai_api_key } from '../constants';

const openai = new OpenAI({
  apiKey: openai_api_key, 
  dangerouslyAllowBrowser:true
});

export default openai