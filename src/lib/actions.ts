import { createAction, Property } from '@activepieces/pieces-framework';
import { pieceAuth } from './auth';
import { invoke } from './client';
export const generate = createAction({
  name: 'happyhorse_generate_video', displayName: 'Create HappyHorse task', description: 'Create once; then query the same task ID until complete. Each creation may be billable.', auth: pieceAuth,
  props: {
    model: Property.StaticDropdown({ displayName: 'Model', description: 'HappyHorse text-to-video model. Check current pricing before creation.', required: true, defaultValue: 'happyhorse-1.1-t2v', options: { options: [{label:'HappyHorse 1.1',value:'happyhorse-1.1-t2v'},{label:'HappyHorse 1.0',value:'happyhorse-1.0-t2v'}] } }),
    prompt: Property.LongText({ displayName: 'Video description', description: 'Describe the video. Creation returns a task ID, not a finished video.', required: true }),
    duration: Property.Number({ displayName: 'Duration in seconds', description: 'Whole seconds from 3 to 15. Duration changes cost.', required: true, defaultValue: 3 }),
    resolution: Property.StaticDropdown({ displayName: 'Resolution', description: 'Resolution changes cost.', required: true, defaultValue: '720P', options:{options:[{label:'720P',value:'720P'},{label:'1080P',value:'1080P'}]} }),
    ratio: Property.StaticDropdown({ displayName: 'Aspect ratio', description: 'Output video shape.', required:true, defaultValue:'16:9', options:{options:[{label:'16:9',value:'16:9'},{label:'9:16',value:'9:16'},{label:'1:1',value:'1:1'}]} }),
  },
  async run(context) { return invoke('happyhorse_generate_video', context.propsValue, context.auth.secret_text); },
});
export const getTask = createAction({
  name: 'happyhorse_task_retrieve', displayName: 'Get HappyHorse task', description: 'Read one existing task ID. Pending previews are not final media.', auth: pieceAuth,
  props: { task_id: Property.ShortText({displayName:'Task ID',description:'Map the task_id from the creation action; do not rerun creation while polling.',required:true}), wait_seconds:Property.Number({displayName:'Wait up to seconds',description:'0 reads once; up to 240 waits for the same task.',required:false,defaultValue:0}) },
  async run(context) { return invoke('happyhorse_task_retrieve',context.propsValue,context.auth.secret_text); },
});
