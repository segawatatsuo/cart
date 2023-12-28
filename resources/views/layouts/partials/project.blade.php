



<!-- チェックボックス -->

<li><input type="checkbox" id="{{ $project['id'] }}" name="category[]" value="{{ $project['id'] }}"/>{{ $project['name'] }}</li>



	@if (count($project['children']) > 0)
	    <ul>
	    @foreach($project['children'] as $project)
	        @include('layouts.partials.project', $project)
	    @endforeach
	    </ul>
	@endif


